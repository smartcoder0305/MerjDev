import React from 'react';
import styles from './styles.scss';

import SharesSection from '../../../../layouts/invest-in-merj/SharesSection';
import * as APIHelper from '../../../../utils/APIHelper';

export default class DealSummary extends React.Component {
    constructor() {
        super();
        this.state = {
          countDownDate: "",
          loadedDate: false,
          shareData: {
            shares: "1.654m",
            sharePrice: "2.42",
            target: "4.00m",
            raised: "1.78m",
            percentageRaised: 0,
            videoID: "",
            dataReady: false,
          }
        }
      }
    
      componentDidMount() {
    
        APIHelper.fetchShares().then((resolve) => {
          return resolve.json();
        }).then((response) => {
          if(response[0]) {
    
            const data = response[0];
            
            let newData = {...this.state.shareData}
            newData.shares = data.TotalShares;
            newData.target = data.Target;
            newData.raised = data.FundsRaised;
            newData.sharePrice = data.SharePrice;
            newData.percentageRaised = data.PercentageRaised;
            newData.videoID = data.videoID;
            this.setState({shareData: newData})
          }  
    
          })
    
      }


      renderDownloadIcon = () => {

        const iconStyle = {
            fill : 'white'
        }
        return (
          <div className={`${styles.downloadIcon}`}> 
    
          <svg  xmlns="http://www.w3.org/2000/svg" width="25.781" height="29.12" viewBox="0 0 25.781 29.12" style={iconStyle}>
            <g id="Download_" data-name="Download " transform="translate(1604.946 -653.773)">
              <path id="Path_382" data-name="Path 382" d="M-1581.441,656.719h-11.995l-1.382-1.974a2.277,2.277,0,0,0-1.865-.971h-5.988a2.279,2.279,0,0,0-2.276,2.276v16.4a2.279,2.279,0,0,0,2.276,2.276h6.265v-2.908h-5.633V656.681h5.027l1.383,1.975a2.278,2.278,0,0,0,1.864.97h11.691v12.187h-6.162v2.908h6.794a2.279,2.279,0,0,0,2.276-2.276V658.995A2.279,2.279,0,0,0-1581.441,656.719Z" transform="translate(0 0)"/>
              <path id="Path_383" data-name="Path 383" d="M-1585.01,700.39l6.156,6.5,6.156-6.5h-4.009V689.233h-4.3V700.39Z" transform="translate(-13.494 -24.001)"/>
            </g>
          </svg>
          </div>
    
        )
      }


    render(){

      if(this.state.dataReady)
           return null;

        return (
            <section className={styles.DealSummary}>
                <SharesSection 
                    TotalShares={this.state.shareData.shares}
                    SharePrice={this.state.shareData.sharePrice}
                    Target={this.state.shareData.target}
                    Funds={this.state.shareData.raised}
                    percentageRaised={this.state.shareData.percentageRaised}
                />

                <div className={styles.line}/>
                <div  className={`${styles.downloadsContainer}`}>
                    <div className={`${styles.downloadsTitle}`}>Downloads</div>
                    <div> 
                        
                    <a href="https://hubs.ly/H0kCn0G0" target="_blank" download> <div className={`${styles.downloadsItem}`}>Cap Raise Pitch Deck <span>{this.renderDownloadIcon()}</span> </div> </a>
                    </div>

                </div>
                
                <div className={styles.line}/>
                <br/>
                
                {
                    this.state.shareData.videoID ?

              
                <div className={styles.videoContentContainer}>

                    <div className={styles.title}>

                    The MERJ Opportunity

                    </div>

                    <div className={styles.subtext}>
                    Established in 2012 with over 30 listings totalling 20% of national GDP. MERJ is raising growth capital to capture a unique and significant business opportunity created by digitization and distributed ledger technology (DLT).

                    </div>

                    <div className={styles.videoContainer}>
                        <iframe src={`https://www.youtube.com/embed/${this.state.shareData.videoID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen="true"></iframe>
                    </div>
                    

                </div>
                    : null
                }
            </section>
        );
    }

};
