import React from 'react';
import styles from './styles.scss';
import InvestInMerjTable from '../../tables/index';

export default class KeyFinancials extends React.Component {
    constructor() {
        super();
        this.state = {
            dataReady: false
        }
    }

componentDidMount() {
    // window.scrollTo({ top: 650, behavior: 'smooth' });
    //     document.body.scrollTop = 0;
}
render(){

    if(this.state.dataReady)
      return null;

    const table = {
        headings: [
            "YEAR 1",
            "YEAR 2",
            "YEAR 3",
            "YEAR 4",
            "YEAR 5"
        ],
        rows: [
            [(<div >Revenue</div>), <div> 1,898,000</div>, <div> 3,486,000</div>, <div> 5,647,000</div>, <div> 9,097,000</div>, <div> 11,882,000</div>],
            [(<div >Expenses</div>), <div> 3,487,000</div>, <div> 3,059,000</div>, <div> 3,341,000</div>, <div> 3,723,000</div>, <div> 4,154,000</div>],
            [(<div >Total</div>), <div> 3,491,000</div>, <div> 3,159,000</div>, <div> 3,508,000</div>, <div> 3,956,000</div>, <div> 4,288,000</div>],
            [(<div >EBITDA</div>), <div> -1,589,000</div>, <div> 427,000</div>, <div> 2,306,000</div>, <div> 5,375,000</div>, <div> 7,729,000</div>],
            [(<div >EBT</div>), <div> -1,593,000</div>, <div> 327,000</div>, <div> 2,140,000</div>, <div> 5,142,000</div>, <div> 7,595,000</div>],
            [(<div >Interest</div>), "-", "-", "-", "-", "-"],
            [(<div >TAX</div>), <div> -29,000</div>, <div> -53,000</div>, <div> -85,000</div>, <div> -137,000</div>, <div> -179,000</div>],
            [(<div >Depreciation</div>), <div> 4,000</div>, <div> 100,000</div>, <div> 167,000</div>, <div> 234,000 </div>, <div> 134,000 </div>],
            [(<div >Net Profit</div>), <div> -1,621,000</div>, <div> 275,000</div>, <div> 2,055,000</div>, <div> 5,005,000</div>, <div> 7,417,000</div>],
        ],
        firstHeadColEmpty: true,
        firstColWidth: '10%',
        colWidth: '10%',
        dualHeadings: {
            active: false,
            headings: []
        }
    }


    const dealPipelineTable = {
        headings: [
            "CURRENT",
            "YEAR 1",
            "YEAR 2",
            "YEAR 3",
            "YEAR 4",
            "YEAR 5"
        ],
        rows: [
            [(<div>No. of issuers</div>), <div> 33</div>, <div> 30</div>, <div> 48</div>, <div> 72</div>, <div> 108</div>, <div> 120</div>],
            [(<div>Cum no. of issuers</div>), <div> 33</div>, <div> 63</div>, <div>111</div>, <div> 183</div>, <div>291</div>, <div> 411</div>],
            [(<div>No. of investors</div>), <div> 10,000</div>, <div> 9,600 </div>, <div> 14,400</div>, <div> 19,200 </div>, <div> 28,800 </div>, <div> 28,800</div>],
            [(<div>Cum no. of investors</div>), <div> 10,000 </div>, <div> 19,600</div>, <div> 34,000</div>, <div> 53,200</div>, <div> 82,000</div>, <div> 110,800</div>],
            [(<div>Avg investment amount</div>), <div> 30,000</div>, <div> 30,000 </div>, <div> 30,000</div>, <div> 30,000</div>, <div> 30,000</div>, <div> 30,000</div>],
            [(<div>Avg market cap ($US m)</div>), <div> 12</div>, <div> 80</div>, <div> 80</div>, <div> 80</div>, <div> 80</div>, <div> 80</div>],
            [(<div>Total market cap ($US m)</div>), <div> 383</div>, <div> 5,040 </div>, <div> 8,880 </div>, <div> 14,640 </div>, <div> 23,280 </div>, <div> 32,880 </div>],
            // [(<div>Cum total market cap</div>), <div> 383 </div>, <div> 623 </div>, <div> 1,007</div>, <div> 1,583 </div>, <div> 2,447 </div>, <div> 3,407 </div>],
            [(<div>No. of sponsors/members/IB's</div>), <div> 10</div>, <div> 12</div>, <div> 12</div>, <div> 12</div>, <div> 7</div>, <div> 7</div>],
            [(<div>Cum no. of sponsors/members/IB's</div>), <div> 10</div>, <div>22</div>, <div> 34</div>, <div> 46</div>, <div> 53</div>, <div> 60</div>],
            [(<div>Liquidity</div>), <div> 2%</div>, <div> 5%</div>, <div> 5%</div>, <div> 5%</div>, <div>5%</div>, <div> 5%</div>],
            [(<div>Trading fees</div>), <div> 0.50%</div>, <div> 0.15%</div>, <div> 0.15%</div>, <div> 0.15%</div>, <div> 0.15%</div>, <div> 0.15%</div>],
            [(<div>Capital raise fees</div>), "", <div> 0.30%</div>, <div>0.30%</div>, <div> 0.30%</div>, <div> 0.30%</div>, <div> 0.30%</div>],
            [(<div>Capital raise % of market cap</div>), "", <div> 15%</div>, <div> 15%</div>, <div> 15%</div>, <div> 15%</div>, <div> 15%</div>],
            [(<div>Staff and Consultants at EOY</div>), <div> 9</div>, <div> 16</div>, <div>19</div>, <div> 20</div>, <div> 21</div>, <div> 22</div>],
            [(<div>Inflation</div>), <div> 5%</div>, <div> 5%</div>, <div> 5%</div>, <div> 5%</div>, <div>5%</div>, <div>5%</div>],
        
        ],
        firstHeadColEmpty: true,
        firstColWidth: '25%',
        colWidth: 'auto',
        dualHeadings: {
            active: false,
            headings: []
        }
    }

    return (
        <section>


           <InvestInMerjTable table={table}/>
           <br/>
           <div className ={styles.KeyFinancialsUseOfFundsContainer}>
               <h3>Use of Funds</h3>
                <div>
                    <img src="../../../../static/images/pages/invest-in-merj/UseofFunds.jpg" alt="" className={styles.KeyFinacialsUseOfFundsImage}/>
                </div>
           </div>

            <div className={styles.InvestInMerjTable}>
                <h3>Projections</h3>
                <InvestInMerjTable table={dealPipelineTable}/>
            </div>

        </section>
    );
}

};
