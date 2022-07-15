import React from 'react';
import styles from './styles.scss';
import * as APIHelper from '../../../../utils/APIHelper';
import moment from 'moment';
import Link from 'next/link';

export default class Background extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: {
                IssuerName: "",
                TickerSymbol: "",
                BaseCurrency: "",
                SecurityForm: "",
                ISIC: "",
                Domicile: "",
                Board: "",
                SponsorAdvisor: "",
                SecurityTokenProtocolDescription: "",
                DateListed: "",
                ISIN: "",
                ExternalAuditor: "",
                MarketLot: "",
                BlockchainDLTNetwork: "",
                MarketCap: "",
                InvestorRelationsContactName: "",
                InvestorRelationsContactEmail: "",
                NumberofSecuritiesListed: "",
                SecuritiesDescription: "",
                CFICode: "",
                LEI: "",
                TransferRestrictions: "",
                ExternalRegistrar: "",
                TokenPlatform: "",
                IssuerContactAddress: "",
                TokenAddress: "",
                PriorDayClosingPrice: ""
            }
        }
      }
    
      componentDidMount() {
        APIHelper.getInvestorRelationsBackgroundInfo().then((res) => {
            return res.json();
        }).then((response) => {
            if(response.statusCode !== 404) {

                var info = response[0];
                this.setState({
                    tableData: info
                })
            }
        })
      }


    

    render(){
        const {TokenPlatform,IssuerContactAddress,TokenAddress,BlockchainDLTNetwork,SecurityTokenProtocolDescription,PriorDayClosingPrice, BaseCurrency,MarketLot,MarketCap,Board,IssuerName, TickerSymbol, CFICode, SecurityForm, SecuritiesDescription, DateListed, ISIN, LEI, ISIC, Domicile, SponsorAdvisor, ExternalAuditor, InvestorRelationsContactName, InvestorRelationsContactEmail, ExternalRegistrar, TransferRestrictions, NumberofSecuritiesListed} = this.state.tableData;
        return (
            <section>
                <h2>Background</h2>
               <div>
               MERJ Exchange Limited, the operator of MERJ Exchange was incorporated on the 24th June 2011 under the Seychelles Companies Ordinance, 1972 with Company Number 849858-1. The Company was incorporated to respond to a Request for Proposal from the Government of the Republic of Seychelles to set up a Securities Exchange in the Seychelles. MERJ Exchange Limited won the Request for Proposal and was thereafter licensed by the Financial Services Authority in June 2012. MERJ Exchange went live with its first listing in August 2013 with the listing of Sacos Group Limited on its Main Board for Equities Listings. 
                </div>
                <br/>
                <div>
                The Company also wholly owns MERJ Clearing and Settlement Limited (licensed by the Financial Services Authority as a Clearing Agency) and MERJ Depository and Registry Limited (licensed by the Financial Services Authority as a Securities Facility). 
                </div>
                <br/>
                <div>
                The Company was listed on MERJ Exchange on the 7th August 2019. The Listing Particulars of MERJ Exchange Limited can be found <a href="https://s3.eu-west-1.amazonaws.com/merj.exchange/6c1a9554281e43f0b50d2cfb8a9e7509.pdf" target="_blank">here</a>.
                </div>
                <br/>

                <h4> Key Information </h4>

                <table className={styles.BackgroundTable}>
                    <tbody>
                        <tr>
                            <td className={styles.dark}><strong>Issuer Name</strong></td>
                            <td>{IssuerName}</td>
                            <td className={styles.dark}><strong>Ticker Symbol</strong></td>
                            <td>{TickerSymbol}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>CFI Code (ISO 10962) </strong></td>
                            <td>{CFICode}</td>
                            <td className={styles.dark}><Link href="/enquiries/general/faqs#47" target="_blank"><a><strong>Security Form</strong></a></Link></td>
                            <td>{SecurityForm}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Securities Description</strong></td>
                            <td>{SecuritiesDescription}</td>
                            <td className={styles.dark}><strong>Date Listed</strong></td>
                            <td>{moment(DateListed).format('DD MMM YYYY')}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>ISIN</strong></td>
                            <td>{ISIN}</td>
                            <td className={styles.dark}><Link target="_blank" href="/enquiries/general/faqs#48"><a><strong>LEI</strong></a></Link></td>
                            <td>{LEI}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>ISIC </strong></td>
                            <td>{ISIC}</td>
                            <td className={styles.dark}><strong>Domicile</strong></td>
                            <td>{Domicile}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Sponsor Advisor</strong></td>
                            <td>{SponsorAdvisor}</td>
                            <td className={styles.dark}><strong>External Auditor</strong></td>
                            <td>{ExternalAuditor}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Investor Relations Contact Name</strong></td>
                            <td>{InvestorRelationsContactName}</td>
                            <td className={styles.dark}><strong>Investor Relations Contact Email</strong></td>
                            <td>{InvestorRelationsContactEmail}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><Link target="_blank" href="/enquiries/general/faqs#49"><a><strong>External Registrar (if applicable)</strong></a></Link> </td>
                            <td>{ExternalRegistrar}</td>
                            <td className={styles.dark}><strong>Transfer Restrictions</strong></td>
                            <td>{TransferRestrictions}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Number of Securities Listed</strong></td>
                            <td>{NumberofSecuritiesListed}</td>
                            <td className={styles.dark}><strong>Board</strong></td>
                            <td>{Board}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Base Currency</strong></td>
                            <td>{BaseCurrency}</td>
                            <td className={styles.dark}><strong>Market Lot</strong></td>
                            <td>{MarketLot}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Market Cap </strong></td>
                            <td>{MarketCap}</td>
                            <td className={styles.dark}><strong>Prior Day Closing Price</strong></td>
                            <td>{PriorDayClosingPrice}</td>
                        </tr>
                    </tbody>
                </table>

                <h4> Additional Information for Security Tokens</h4>


                <table className={styles.BackgroundTable}>
                    <tbody>
                        <tr>
                            <td className={styles.dark}><strong>Blockchain/DLT Network</strong></td>
                            <td>{BlockchainDLTNetwork}</td>
                            <td className={styles.dark}><strong>Security Token Protocol Description</strong></td>
                            <td>{SecurityTokenProtocolDescription}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><Link target="_blank" href="/enquiries/general/faqs#50"><a><strong>Issuer Contact Address</strong></a></Link></td>
                            <td>{IssuerContactAddress}</td>
                            <td className={styles.dark}><strong>Token Address (if applicable)</strong></td>
                            <td>{TokenAddress}</td>
                        </tr>
                        <tr>
                            <td className={styles.dark}><strong>Token Platform</strong></td>
                            <td colSpan={3}>{TokenPlatform}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }

};
