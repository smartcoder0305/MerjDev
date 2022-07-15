import React from 'react';
import styles from '../styles.scss';
import Router from 'next/router';
import * as APIHelper from '../../../utils/APIHelper';


class PortfolioSection extends React.Component {
    constructor() {
        super();

        this.state = {
            Client: {},
            Accounts: [],
            Trades: [],
            ptUrl: '',
            token: [],
            tradingAvaliable: false,
            dataAvailable: false
        }

    }

    componentDidMount() {

        APIHelper.GetPTUrl().then((resolve) => {
            return resolve.json();
        }).then((res) => {
            APIHelper.GetConfig().then((app) => {
                let ptUrl = res.Data.PTDownloads.LiveWebStationUrl;
                this.setState({ ptUrl });
            });
        })

        APIHelper.GetPtToken().then((results) => {
            if (results) {
                this.setState({ token: results.Data });
            }
        }).catch((error) => {
            console.log("error ", error);
        })

        APIHelper.GetClientDetails().then((res) => {
            if (res) {
                this.setState({
                    Client: res.Data
                })
            }
        }).catch((err) => {
            console.log('err', err);
        })
        APIHelper.GetAccounts().then((res) => {
            if (res) {
                this.setState({
                    Accounts: res.Data,
                    dataAvailable: true
                });
                this.setTradeInformation(res.Data);

            }
        }).catch((err) => {
            console.log("err", err);
        })
    }

    setTradeInformation = (Accounts) => {
        var trades = [];
        var i = 0;
        while (i < Accounts.length) {
            
            ++i;
            APIHelper.GetTradingInformation(Accounts[i-1].AccountId).then((results) => {
                if(results.Data)
                {
                    let trade = results.Data;
                    for( var j =0; j < Accounts.length; j++ )
                    {
                       
                        if(trade.AccountId === Accounts[j].AccountId)
                        {
                            trades.push(trade);
                            break;
                        }
                    }
                    if(i-1 === Accounts.length-1)
                    {
                        this.setState({
                            Trades: trades, 
                            tradingAvaliable: true
                        })
                    }
                }
            }).catch((err)=>{
                console.log("error ", err);
            })
        }
    }

    SubmitAsPost=(tokens, newURL, AccountType, AccountId)=>{
        if(tokens){
            for(var i=0; i < tokens.length; i++){    
                if(tokens[i].AccountId == AccountId){
                    return(<div>
                <form action={newURL+"/token"} method="post" className={styles.SSO}>
                    <input name="token" type="hidden" value={`${tokens[i].Token}`}/>
                    <input  type="submit" value={AccountType === "Managed" || AccountType ==="Discretionary"  ? "View": "Trade"}  formtarget="_blank"/>
                </form>
                </div>)
                }
            }
        }
    }

    handleWithdrawal=(event, id, currency)=>{
        event.preventDefault();
        
        Router.push({
                pathname: '/withdrawals',
                query: { accountId: id, Currency: currency},
                shallow: true
        })

    }

    render() {
        if (!this.state.dataAvailable)
            return null;

        const { Accounts, Trades } = this.state;
 
        return (
            <div className={styles.mobileScreen}>
                <div className={styles.contentPortfolio}>
                    <div className={styles.portfolio}>
                        <div className={styles.portfolioHeading}>Portfolio</div>
                        <div className={styles.clientDetails}>
                            <h4 className={styles.greating}>Hi {this.state.Client.FirstName}</h4>
                            <h4 className={styles.infor}>Your Client Number is {this.state.Client.InvestorNumber}</h4>

                        </div>
                    </div>

                    {
                        this.state.tradingAvaliable ?
                            Accounts.length > 0 ?
                                Accounts.map(account => {
                                    return Trades.map(trade =>{
                                        if(account.AccountId === trade.AccountId){
                                           return(
                                               <div className={styles.accountContent}>
                                                    <div className={styles.accountCurrency}>{account.Currency}</div>
                                                        <div className={styles.weirdScreen}>
                                                            <div className={styles.accountName}>{account.Name}</div>
                                                            <div className={styles.accountBalance}>Available Cash: {trade.WithdrawalAvailable.toFixed(2).toString()}</div>
                                                        </div> 
                                                    <div className={styles.buttonStyle}>
                                                        <div><input type="submit" value="Withdraw" onClick={(event)=>this.handleWithdrawal(event, trade.AccountId, account.Currency)} /></div>
                                                        {
                                                            this.state.token ? this.SubmitAsPost(this.state.token, this.state.ptUrl, account.AccountType, trade.AccountId) : null
                                                        }
                                                    </div>
                                                </div>
                                           )
                                       }
                                   }) 
                                }) : <div> sorry no accounts</div> : null
                    }
                </div>
            </div>
        );
    }

};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
