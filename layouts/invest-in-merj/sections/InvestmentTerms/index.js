import React from 'react';
import styles from './styles.scss';

export default class InvestmentTerms extends React.Component {
    constructor() {
        super();
        this.state = {
                dataReady: false
        }
    }

    componentDidMount() {
        // window.scrollTo({ top: 650, behavior: 'smooth' });
        // document.body.scrollTop = 0;
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
    
    
    
      renderVerify =()=> {
        return (
              <div className={`${styles.clock}`}>
    
                <svg className={`${styles.icon}`} xmlns="http://www.w3.org/2000/svg" width="25.781" height="29.12" viewBox="0 0 17.437 23.257">
                  <g id="Group_51" data-name="Group 51" transform="translate(700.608 837.096)">
                    <path id="Path_224" data-name="Path 224" d="M-688.762-830.694v-1.149h1.286V-837.1H-696.3v5.254h1.286v1.149a8.731,8.731,0,0,0-5.592,8.137,8.728,8.728,0,0,0,8.719,8.719,8.729,8.729,0,0,0,8.719-8.719A8.732,8.732,0,0,0-688.762-830.694Zm-.853-4.264v.833h-4.548v-.833Zm-3.262,3.115h1.977v.624a8.714,8.714,0,0,0-.989-.058,8.7,8.7,0,0,0-.988.058Zm.988,15.866a6.588,6.588,0,0,1-6.58-6.58,6.588,6.588,0,0,1,6.58-6.58,6.588,6.588,0,0,1,6.581,6.58A6.588,6.588,0,0,1-691.889-815.977Z" transform="translate(0 0)" />
                    <path id="Path_225" data-name="Path 225" d="M-678.1-810.659h-2.138v6.542h4.868v-2.138h-2.73Z" transform="translate(-13.107 -17.015)" />
                  </g>
                </svg>
              </div>
        )
      }
    
      linkDisabled = () =>{
        return false;
      }
    

render(){

        if(this.state.dataReady)
           return null;

    const checkMark = (
        <svg style={{'marginTop': '5px'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path id="Tick" d="M-1147.434,637.374a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-1147.434,637.374Zm-.844,12.565-3.625-3.623,1.334-1.333,2.29,2.306,4.481-4.48,1.333,1.334Z" transform="translate(1156.434 -637.374)" fill="#7a4488"/>
        </svg>
    )


    return (
        <section className={styles.Section}>
        <br/> 
        <br/>
            <div className={styles.DealCheckText1}><span className={styles.DealCheckmark1}>{checkMark}</span><div className={styles.text1}>The authorized share capital of the company is 15 million ordinary shares with a total par value of USD 450,000.00.</div></div>
            <br/>
            <div className={styles.DealCheckText2}><span className={styles.DealCheckmark2}>{checkMark}</span><div className={styles.text1}>The issued ordinary shares in the capital of the company rank pari passu with each other.</div></div>
            <br/>
            <div className={styles.DealCheckText3}><span className={styles.DealCheckmark3}>{checkMark}</span><div className={styles.text1}>The company only has only has one class of shares in issue, and these shares are not redeemable.</div></div>
            <br/>
            <div className={styles.DealCheckText4}><span className={styles.DealCheckmark4}>{checkMark}</span><div className={styles.text1}>As part of its IPO, the company will issue an additional 1,652,893 tokenised ordinary share at a price of USD 2.42.</div></div>
            <br/>

            <section class={styles.gridContainer}>
                <div class={styles.row}>
                    <div class={styles.column}>                     
                            Last practicable date                      
                    </div>
                    <div class={styles.column}>                       
                            27 August 2019                       
                    </div>
                </div>

                <div class={styles.row}>
                    <div class={styles.column}>                      
                            Pre-listing statement date                      
                    </div>
                    <div class={styles.column}>                       
                            10 May 2019                        
                    </div>
                </div>


                <div class={styles.row}>
                    <div class={styles.column}>                      
                            Date of approval of listing of MERJ-S                      
                    </div>
                    <div class={styles.column}>                       
                            28 May 2019                       
                    </div>
                </div>

                <div class={styles.row}>
                    <div class={styles.column}>                     
                            Listing of MERJ-S on MERJ exchange                      
                    </div>
                    <div class={styles.column}>                       
                            07 August 2019                       
                    </div>
                </div>

                <div class={styles.row}>
                    <div class={styles.column}>                     
                            Intended date for the opening of the IPO                     
                    </div>
                    <div class={styles.column}>                       
                            10 September 2019                      
                    </div>
                </div>

                <div class={styles.row}>
                    <div class={styles.column}>                     
                            Intended date for the closing the IPO                     
                    </div>
                    <div class={styles.column}>                       
                            27 March 2020                     
                    </div>
                </div>

                <div class={styles.row}>
                    <div class={styles.column}>                     
                            Intended date for the trading of the IPO shares (subject to early close)                      
                    </div>
                    <div class={styles.column}>                       
                            31 March 2020                      
                    </div>
                </div>         

                <br/> 
        <br/>
        <hr/>


            <div  className={`${styles.downloadsContainer}`}>
              <div className={`${styles.downloadsTitle}`}>Downloads</div>
              <div> 
                
              <a href="https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf" target="_blank" download> <div className={`${styles.downloadsItem}`}>Prospectus <span>{this.renderDownloadIcon()}</span> </div> </a>

              <a href="https://merj-files.s3-eu-west-1.amazonaws.com/Public_Listing_Suppliment_v01.pdf" target="_blank" download> <div className={`${styles.downloadsItem}`}>Public Listing Supplement <span>{this.renderDownloadIcon()}</span> </div> </a>

              <a href="https://hubs.ly/H0kCn0G0" target="_blank" download> <div className={`${styles.downloadsItem}`}>Cap Raise Pitch Deck <span>{this.renderDownloadIcon()}</span> </div> </a>


              </div>

          </div>
            </section>
            

    </section>
    );
}

};
