import React from 'react';
import * as APIHelper from '../../../utils/APIHelper';
import ClientStatus from '../ClientStatus';
import styles from '../styles.scss';
import Spinner from '../spinner';
import Moment from 'react-moment';
import Link from 'next/link';

export default class documentsUploadSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: {},
            status: props.status,
            tag: null,
            documents: null,
            showSubmitMsg: false,
            showSuccessMsg: false,
            showUploadError: false,
            disableUploadButton: false,
            hideUploadButton: false,
            showSuccessUploadDocumentMsg : false,
            showErrorUploadDocumentMsg : false,
            failedUpload : '',
            tags : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.uploadDocument = this.uploadDocument.bind(this);
        this.fetchDocuments = this.fetchDocuments.bind(this);
        // this.displayDocument = this.displayDocument.bind(this);
        this.submitDocuments = this.submitDocuments.bind(this);
        this.triggerBrowseMenu = this.triggerBrowseMenu.bind(this);
    }
    
    componentDidMount(){
      const { status } = this.props;
      this.fetchDocuments(status);

      this.GetTags(this.props.ClientType).then(res => {
        this.setState({
          tags: res.map( tag => {return tag.Tag;})
    });})
    }

    fetchDocuments(status){
        APIHelper.RetrieveDocuments().then(res =>{ 
            if(res){
              
              if(status) {
                this.setState({
                  documents: res.Data,
                  showSubmitMsg:(status.State === 'PartialDocumentUploadedState' || res.Data.length>0)? true: false,
                  showSuccessMsg:(status.State === "AwaitingKycState") ? true : false
              })
              } else {
                this.setState({
                  documents: res.Data,
              })
              }
               
            }
        }).catch(err=>{
            throw new Error(err).message;
        })
    }

    uploadDocument(){
      
        const { file, tag } = this.state;
        const { ClientType} = this.props;

        var doc = {};
        doc.ContentType = file.type;
        doc.FileDetails = file;
        doc.Tags = tag;

        this.setState({disableUploadButton: true});
        
        APIHelper.UploadDocument(doc).then((res)=>{
            this.fetchDocuments();
            this.GetTags(this.props.ClientType).then(res => {
              this.setState({
                tags: res.map( tag => {return tag.Tag;}),
                file: null,
                showSubmitMsg: true,
                disableUploadButton: false,
                hideUploadButton: false,
                showSuccessUploadDocumentMsg : true,
                showErrorUploadDocumentMsg: false,
              });
        })
        }).catch(err=>{
          this.setState({ 
            showErrorUploadDocumentMsg: true,
            disableUploadButton: false,
            failedUpload: err.message });
        });
    }

    GetTags(ClientType) {
      return APIHelper.GetDocTags(ClientType).then(res =>{ 
        if(res) 
        return res;});
    }

    submitDocuments(){
      this.setState({disableUploadButton: true});

        APIHelper.SetClientAwaitingKycState()
        .then(res=>{
            this.fetchDocuments();
            window.location.reload();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.scrollTop = 0;
            this.setState({
              file: null,
              disableUploadButton: false,
              hideUploadButton: false,
              showSubmitMsg: false,
              showSuccessMsg: true
            })

        })
        .catch(err=>{
            this.setState({disableUploadButton: false})
            return err;
        });
    }

    handleChange(event) {
        var target = event.target;
        var file = target.files[0];
        const {documents} = this.state;
        if(documents && file) {
          var documentExists = false;
          documents.forEach((document) => {
              if(document.FileName === file.name && document.Tags.systemtag === this.state.tag) {
                documentExists = true;
              }
          })
    
          if(!documentExists) {
            this.setState({ file, showUploadError: false });
          } else {
            this.setState({
              showUploadError: true
            })
          }
        } else {
          if(file) {
            this.setState({ file, showUploadError: false  });
          }
        }
        
    }
    handleTagChange(event) {
        var tag = event.target.value;
        this.setState({ tag });
    }
    triggerBrowseMenu() {
        var button = document.getElementById('fileUploader');
        if (button) {
          button.click();
        }
    }
    renderGroupRequirements() {
        return (
          <React.Fragment>
            <div><strong> Are you unsure which FICA / KYC documents are required? see FAQ:  <a target="_blank" href='/enquiries/general/faqs/#3'> What are the MERJ KYC Documents Required for an Entity?  </a> for more information.</strong> </div>
          </React.Fragment>
        );
    }
    renderIndividualRequirements() {
        return (
          <React.Fragment>
            <div> Please upload the following documents: </div>

            <ol>
              <li>
                Copy of government-issued ID document (ID Card, Passport, Driver's License)
              </li>
              <li>
                Proof of Physical Address (Utility Bill/Municipal Bill, Bank Statement, or Cellphone bill)
              </li>

            </ol>
          </React.Fragment>
        );
    }
    renderDocumentRequirements(){
        const { ClientType} = this.props;
        switch (ClientType) {
            case "Individual":
              return this.renderIndividualRequirements();
            case "Company":
              return this.renderGroupRequirements();
            default:
              return this.renderIndividualRequirements();
          }
    }
    GetKycState(status){
        let currentStatus = '';
      
        switch(status){

            case ClientStatus.DocumentPending:
                currentStatus = 'Documents Pending';
                break;
            case ClientStatus.PartialDocumentUploadedState:
            case ClientStatus.PendingFundAmericaReview:
            case ClientStatus.FirstChecked:
            case ClientStatus.PendingReview:
                currentStatus = 'Pending Review';
                break;
            case ClientStatus.Rejected:
                currentStatus = 'Rejected';
                break;
            case ClientStatus.Completed:
            case ClientStatus.CompletedWithFunds:
                currentStatus = 'Completed';
                break;
            default:
                currentStatus = 'Pending Review';
            }
            return currentStatus;                   
    }

    ShowSubmitBtn(status){
      var showBtn = true;
      switch(status){
        case ClientStatus.FirstChecked:
        case ClientStatus.PendingFundAmericaReview:
        case ClientStatus.Completed:
        case ClientStatus.CompletedWithFunds:
            showBtn = false;
            break;
      }
        return showBtn;   
    }

    render() {
      let fileName = '';
      if (this.state.file) {
        fileName = this.state.file.name;
      }
      const { documents, status, tags } = this.state;
        let colorClass = status.State === ClientStatus.Rejected ? '#F87876' : status.State === ClientStatus.Pending ? 'black': status.State === ClientStatus.PendingReview || status.State === ClientStatus.PendingFundAmericaReview ? '#FFA500' : status.State === ClientStatus.Completed ? '#008000' : 'black'
        
        return (
          <div className={styles.contentFullWidth}>
                <div >
                  <div className={styles.kycStatusContainer}><div className={styles.documentVerificationStatus}> Your verification status is: <span style={{color: colorClass}}>{this.GetKycState(status.State)}</span></div></div>
                </div>
                <br/><hr/>
                <br/>
    
            {
    
              status.State === ClientStatus.Rejected ? (
                  <div  className={styles.documentWarningContainer}>
                    <div> Your FICA/KYC Documents have been rejected. Please review your uploaded documents below and re-upload any missing documents. </div>
                    <div><strong> Please refer to the following FAQ's for the required supporting documentation: </strong> </div>
    
                    <ul>
                      <li><Link target="_blank" to='#'>Rejected FICA/KYC documentation</Link></li>
                      <li><Link target="_blank" to='#'>Supporting Documentation</Link></li>
    
                    </ul>
    
    
                  </div>
                  ): null
              }
    
              {this.renderDocumentRequirements()}
    
              <hr />
              <br />
              
              <div> Criteria: </div>
    
              
              <ul className = {styles.documentCriteriaContainer}> 
                <li>Supported document types: gif, jpeg, png, tiff, bmp, pdf</li>
                <li>Maximum document size: 10MB</li>
                <li>A maximum of 10 documents can be uploaded per day.</li>
              </ul>
              
              <hr />
              <br />
    
    {this.props.showUpload ? 
              <div className={styles.documentUploadContainer}>
                {this.state.showSuccessUploadDocumentMsg ?
                <div className={styles.successMsg}> Document uploaded successfully</div>
                : null
                }
                {this.state.showErrorUploadDocumentMsg ?
                <div className={styles.errorMsg}> {this.state.failedUpload} </div>
                : null  
                }
                <div className={styles.documentUploadTitle}> Upload Document </div>
                <div className={styles.uploadDocInputs}>
    
                  <div className={styles.tagInputs}>
                    <div className={styles.documentUploadLabel}> Tag </div>
                    <select onChange={this.handleTagChange} id='tag' name="Tag" className={styles.selectDocuments}>
                      <option hidden value="">Please select</option>
                      {tags.map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                      )};
                      </select>
                  </div>
                  
                  <div className={styles.selectDocumentIput}>
                    <div  className={styles.documentUploadLabel}> Select a Doc. <span> (Max 10mb) </span> </div>
                    <input
                      ref={this.clientDocs}
                      style={{ display: 'none'}}
                      type="file"
                      name="fileUploader"
                      id="fileUploader"
                      required
                      onChange={this.handleChange}
                      />
    
                    <div className={styles.inline} onClick={this.triggerBrowseMenu} >
                      <input
                        type="text"
                        id="doc-upload"
                        className={styles.inlineInput}
                        value={fileName}
                        required={!this.state.showSuccessMsg}
                      />
                      <button className={styles.button+' '+styles.white__btn}>  Choose Doc. </button>
                    </div>
    
                  </div>
    
                <div className={styles.selectDocumentIput} >
                  <button className={styles.buttonLarge +' '+styles.primary} disabled={this.state.disableUploadButton || (!this.state.file || !this.state.file.name) || !this.state.tag}
                   onClick={this.uploadDocument}
                   >{!this.state.disableUploadButton ? <div className={styles.uploadDocument} > Upload Doc. </div>: <Spinner/>}</button>
                </div>
    
                {
                  this.state.showUploadError ?
                  <div className={styles.selectDocumentIput} >
                <br/>
                  <div style={{color: 'red'}}>
                    You have already uploaded a document with that filename!
                  </div>
                </div> : null
              }
              </div>
              <br />
              <hr />
              <br />
              {
                this.state.showSubmitMsg && this.ShowSubmitBtn(status.State) ?
                
                <div >
                  <div >
                    Have you uploaded all your documents? Submit your documents for  verification
                    <br /><br />
                    <div  >
                      <button className={[styles.buttonLarge+' '+styles.secondary]} onClick={this.submitDocuments}>Submit Documents</button>
                    </div>
                  </div>
                </div> : null
              }
    
              {
                this.state.showSuccessMsg ?
                <div >
                  <div >
                    <div >
                    Success!
                    <br /><br />
                    Your documents have been submitted and will now be reviewed. Please allow 3 business days for verification.
                    </div>
                  </div>
                </div> : null
              }
            </div> : null
    }
            {
              documents && documents.length > 0 ?
                <div className={styles.docRecords}>
                 
                    <div className={styles.docOnRecord}>Documents On Record</div>
                  <div>
                          <div className={styles.documentsOuterTitle}>
                              <div>Tag</div>
                              <div>File Name</div>
                              <div>Date</div>
                          </div>
                        {
                          <div style={{width: '100%'}}>
                          <ul className={styles.documentsUploadTable}> 
                            {
                                 
                            documents.map((doc, index) => {
                              return (
                                <li key= {index} className = {styles.documentItem}>
                                    <div  className={styles.documentItemRow}>
                                        <div className={styles.documentsInnerTitle}> Tag </div>
                                        <div > {doc.Tags.systemtag} </div>
                                    </div>
                                    <div  className={styles.documentItemRow}>
                                        <div className={styles.documentsInnerTitle}> File Name </div>
                              <div style={{'overflowX': 'hidden', 'textOverflow': 'ellipsis'}}>{doc.IsPending ? doc.FileName : <a target='_blank' href={doc.Url}> {doc.FileName} </a>}</div>      
                                    </div >
                                    <div  className={styles.documentItemRow}>
                                        <div className={styles.documentsInnerTitle}> Date </div>
                                        <div ><Moment format='YYYY-MM-DD HH:mm'>{doc.Created}</Moment></div>
                                    </div>
                                </li>
                                )
                              })
                            }
                            </ul>
                          </div>                  
                        }
                  </div>
                </div> : null
                }
            </div>
        );
    }
}    
