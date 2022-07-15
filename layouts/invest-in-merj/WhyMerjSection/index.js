import React from 'react';
import Thing from '../../../components/Thing';
import styles from './styles.scss';
import helpers from '../../../static/styles/helpers.scss';


const WhyMerjSection = () => {
  function renderDownloadIcon () {
    return (
      <div className={`${styles.downloadIcon}`}> 

      <svg  xmlns="http://www.w3.org/2000/svg" width="25.781" height="29.12" viewBox="0 0 25.781 29.12">
        <g id="Download_" data-name="Download " transform="translate(1604.946 -653.773)">
          <path id="Path_382" data-name="Path 382" d="M-1581.441,656.719h-11.995l-1.382-1.974a2.277,2.277,0,0,0-1.865-.971h-5.988a2.279,2.279,0,0,0-2.276,2.276v16.4a2.279,2.279,0,0,0,2.276,2.276h6.265v-2.908h-5.633V656.681h5.027l1.383,1.975a2.278,2.278,0,0,0,1.864.97h11.691v12.187h-6.162v2.908h6.794a2.279,2.279,0,0,0,2.276-2.276V658.995A2.279,2.279,0,0,0-1581.441,656.719Z" transform="translate(0 0)"/>
          <path id="Path_383" data-name="Path 383" d="M-1585.01,700.39l6.156,6.5,6.156-6.5h-4.009V689.233h-4.3V700.39Z" transform="translate(-13.494 -24.001)"/>
        </g>
      </svg>
      </div>

    )
  }



  function renderVerify() {
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

  function linkDisabled(){
    return false;
  }

  return (
    <section>


      <div className={`${helpers.paddedInner} animate`}>
        <div className={styles.whyMerjInner}>
          <div className={styles.left}>
            <h1>Why Invest in MERJ?</h1>
            <p>
            MERJ is an established operator of regulated market infrastructure. 
            We plan to use blockchain technology to streamline many of the processes required in the operation of securities markets -- from issuance to shareholder registers, to compliance, distribution, voting and data dissemination -- ultimately reducing costs for investors and issuers. 
            The technology creates opportunities for innovative new business models and provides an access point to the capital markets which is well suited to the “mobile first” ecosystems of many emerging markets. 
            We are combining the best of the old world and the new to provide a key piece of missing infrastructure for the growth of capital markets and digital assets. 
            The tokenized listing of MERJ equity is a world first on a Regulated Market. 
            We are leading the way in this space with a regulatory framework that is robust and a technology environment that has been proven.
            </p>
            {/* <p>
              MERJ is pioneering the next generation of global financial markets leveraging
              blockchain technology to create the world’s first truly global, direct access end to
              end regulated exchange built for the consumers of financial markets, issuers and
              investors.
            </p> */}
            {/* <p>
              MERJ is using blockchain technology to streamline every process that takes place in securities markets –
               from issuance to shareholder registers, to compliance, distribution and voting –
                ultimately reducing costs for investors and issuers. The technology creates an
                 access point to the capital markets which is particularly suited to the “mobile first”
                  ecosystems in many emerging markets. We are combining the best of the old world and the
                   new to provide a key piece of missing infrastructure for the growth of digital assets. 
                   Our tokenized listing of MERJ equity was a world first on a Regulated Market.
                    We are pioneering this space with a regulatory framework that is robust and technology that has been proven.
            </p> */}
            {/* <ul>
              <li>Primary and Secondary Markets, Clearing, Settlement, Registry/Depository Services</li>
              <li>Global Deal Promotion, Issuance and Distribution Platform for Compliant Global Securities Token Offerings</li>
              <li>Direct Participation and Access to Exchange and Post Trade for Global Participants</li>
              <li>Fully Fledged National Securities Exchange (Listed Securities Qualify as “Listed” for Investment Mandates) </li>
              <li>Interoperability with Other Markets Across the Globe to Support Cross Listings</li>
              <li>Immutable Cap Tables and Ownership Registers Maintained on a Distributed Ledger (Ethereum)</li>
              <li>Multi-Asset - Equity, Debt and Derivative Securities, Including Securities Tokens, Digital Assets and Hybrid Instruments</li>
              <li>Multi-Currency Settlement in Major Fiat, Stable Coins, Major Cryptocurrencies</li>
            </ul> */}
          
            <br />
            <Thing />
          <div  className={`${styles.downloadsContainer}`}>
              <div className={`${styles.downloadsTitle}`}>Downloads</div>
              <div> 
                
              {/* <a onClick={linkDisabled()}><div className={`${styles.downloadsItem +' '+ styles.linkDisabled}`}>Prospectus<small className={styles.smallText}> (coming soon)</small> <span>{renderVerify()}</span></div></a> */}
              <a href="https://merj-files.s3-eu-west-1.amazonaws.com/Merj_Prospectus_v01.pdf" target="_blank" download> <div className={`${styles.downloadsItem}`}>Prospectus <span>{this.renderDownloadIcon()}</span> </div> </a>

              <a href="https://merj-files.s3-eu-west-1.amazonaws.com/Public_Listing_Suppliment_v01.pdf" target="_blank" download> <div className={`${styles.downloadsItem}`}>Public Listing Supplement <span>{renderDownloadIcon()}</span> </div> </a>

              </div>

          </div>

          
          </div>

        </div>
      </div>
    </section>
  );
};

WhyMerjSection.propTypes = {};
WhyMerjSection.defaultProps = {};

export default WhyMerjSection;
