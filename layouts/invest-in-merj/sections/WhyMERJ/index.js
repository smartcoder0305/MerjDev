import React, { createRef } from 'react';
import InvestInMerjTable from '../../tables/index';
//import { styles } from 'ansi-colors';
import styles from './styles.scss';
import OurTeamSection from '../../OurTeamSection';
import header from '../../../../components/Header';
export default class WhyMERJ extends React.Component {
    
    constructor() {
        super();
        this.state = {
            dataReady: false,
        }
    }

    componentDidMount() {
    //  window.scrollTo({ top: 650, behavior: 'smooth' });
    //     document.body.scrollTop = 0; 

    }

render() {

    if(this.state.dataReady)
      return null;

    const checkMark = (
        <svg style={{'marginTop': '5px'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path id="Tick" d="M-1147.434,637.374a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-1147.434,637.374Zm-.844,12.565-3.625-3.623,1.334-1.333,2.29,2.306,4.481-4.48,1.333,1.334Z" transform="translate(1156.434 -637.374)" fill="#7a4488"/>
        </svg>
    )

    const emptyCell = (
        <br/>
    )

    const table = {
        headings: [
            "MERJ",
            "SIX",
            "GIBRALTAR",
            "MAURITIUS",
            "MALTA",
            "TZERO"
        ],
        rows: [
            [(<div>Regulated listing venue</div>), checkMark, checkMark, checkMark, checkMark, checkMark, emptyCell],
            [(<div>Regulated secondary trading for listed securities</div>), checkMark, checkMark, checkMark, checkMark, checkMark, emptyCell],
            [(<div>Regulated clearing and settlement for listed securities</div>), checkMark, checkMark, checkMark, checkMark, checkMark, emptyCell],
            [(<div>Regulated registry for listed securities</div>), checkMark, checkMark, checkMark, checkMark, checkMark, emptyCell],
            [(<div>DLT integration operating</div>), checkMark, emptyCell , emptyCell, emptyCell, emptyCell, checkMark],
            [(<div>Regulatory approval for secondary trading for listed securities tokens</div>), checkMark, emptyCell, emptyCell, emptyCell, emptyCell, (<span style={{'fontSize': '12px', 'white-space': 'pre-line'}}>Partnering with Alternative Trading System</span>)],
            [(<div>Regulatory approval for clearing and settlement for listed securities tokens</div>), checkMark, emptyCell, emptyCell, emptyCell, emptyCell, checkMark],
            [(<div>Regulatory approval for registry for listed securities tokens</div>), checkMark, emptyCell, emptyCell, emptyCell, emptyCell, checkMark],
            [(<div>Operating E2E across securities and securities tokens offerings</div>), checkMark, emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
            [(<div>Direct access to E2E services for any investor type across traditional and digital securities</div>), checkMark, emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
        ],
        firstHeadColEmpty: true,
        firstColWidth: '25%',
        colWidth: 'auto',
        dualHeadings: {
            active: true,
            headings: [
                (<img src="../../../../static/images/invest/MERJ.png"/>),
                (<img src="../../../../static/images/invest/Swiss.png"/>),
                (<img src="../../../../static/images/invest/GSX.png"/>),
                (<img src="../../../../static/images/invest/Mauritius.png"/>),
                (<img src="../../../../static/images/invest/Malta.png"/>),
                (<img src="../../../../static/images/invest/tZero.png"/>),
            ]
        }
    }


    return (
        
        <section className={styles.whyMerjContainer}>
            <br/>
            <div className={styles.InvestInMerj}>
                <div className={styles.investWithConfidence}>
                    <h3>Invest with Confidence</h3>
                </div>
                <div className={styles.investWithConfidence1}>
                    <div>Investors are purchasing a listed security token on a national stock exchange that is regulated in line with principles from International Organisation of Securities Commissions (IOSC) and World Federation of Exchanges (WFE)</div>
                </div>
                <div className={styles.investWithConfidence2}>
                    <img src="/static/images/InvestwithConfidence.png" className={styles.investWithConfidenceImage}/>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <hr/>
            <h3>MERJ is Ahead of the Competition</h3>        
            <InvestInMerjTable table={table}/>
            <br/>
            <hr/>
            <div className={styles.rightTeamContainer}>
                <div className={styles.rightTeam}>
                    <h3>The Right Team</h3> 
                </div>
                <OurTeamSection />
            </div>
            

            <div className={styles.E2EContainer}>
                <hr/>
                <div className={styles.E2EPlatform}>

                    <h3>E2E Platform for Issuers and Investors</h3> 
                </div>    
                <div className={styles.merjOffers}>         
                    <div>For the first time, investors are able to access listed securities directly with the exchange, thus bypassing intermediaries and taking full control of their investments. MERJ offers lower costs and less complexity for issuers and investors.</div>
                </div>
                <br/>
                <div className={styles.E2EPlatformImg}>
                    <img src="/static/images/E2EPlatformforIssuersandInvestors.jpg"/>
                </div>
            </div>
            <div className={styles.merjBusinessContainer}>
                <hr/>
                <h3>MERJ is an Established Business</h3>
                <br/>
                <div className={styles.merjRevenue}>
                        <div>
                        <p>MERJ has been operating for seven years with a fully established regulatory framework</p> 
                        </div>
                </div>
                <div className={styles.merjBusiness}>
                    <img className={styles.merjBusinessDesktop} src="/static/images/MERJcompanyTimeline.jpg"/>
                    <img className={styles.merjBusinessMobile} src="/static/images/MERJcompanyTimelineMobile.png"/>
                </div>
            </div>

        </section>
    );
}
};
