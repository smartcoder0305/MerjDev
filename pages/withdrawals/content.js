import React, { Component } from 'react';
import styles from './styles.scss';

import * as APIHelper from '../../utils/APIHelper';


import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ErrorModal from '../../components/ErrorModal';
import SuccessModal from '../../components/SuccessModal';

export class WithdrawalsContent extends Component {
    constructor() {
        super();
        this.state = {
            fundsAvailable: 0,
            withdrawAmount: 0,
            withdrawAll: false,
            loading: false,
            isBankingAccountAvailable: false,
            isUSACitizen: false,
            dataReady: false,
            applicationComplete: false,
            openModal: false,
            isOk: false,
            showSuccessMessage: false,
            withdrawalFee: 0,
            AccountId: '',
            Account: {},
            Currency: '',
            ErrorContent: '',
            openErrorMOdel: false,
            CurrenciesAvailable: [],
            AccountsAvailable: [],
            showCancelConfirmation: false
        }
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
            withdrawAmount: value
        })

    }

    toggleWithdrawAll = () => {

        const { withdrawAll, fundsAvailable, withdrawAmount, withdrawalFee } = this.state;
        let zero = 0;
        let amount = withdrawAmount;
        if (!withdrawAll) {
            amount = fundsAvailable;
        } else {
            amount = zero.toFixed(2);
        }
        this.setState({ withdrawAll: !withdrawAll, withdrawAmount: amount });
    }

    fetchFundsAvailable = (id) => {
        var accountId = this.state.AccountId;
        if(id) {
            accountId = id;
        }
        APIHelper.GetTradingInformation(accountId).then((results) => {
            if(results){
                APIHelper.GetWithdrawalFee(accountId).then((res)=>{
                    if(res)
                    {
                        this.setState({
                            fundsAvailable: results.Data.WithdrawalAvailable.toFixed(2),
                            withdrawalFee : res.Data.WithdrawalFee.toFixed(2)
                        })
                    }
                })
                
            }
        }).catch((err)=>{
            console.log("error ", err);
        })
    }

    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTop = 0;
       
        var queryString = new URLSearchParams(window.location.search);
        
        var queryStringsExist = queryString.get('accountId') !== null && queryString.get('Currency') !== null;
        
        
        APIHelper.GetAccounts().then((res) => {
            if (res) {
                let currencies = [];
                res.Data.forEach((account) => {
                    var currency = account.Currency;
                    var indexExists = currencies.indexOf(currency) != -1;
                    if(!indexExists) {
                        currencies.push(currency);
                    }
                })

                if(queryStringsExist) {
                    this.setState({
                        AccountId: queryString.get('accountId'),
                        Currency:queryString.get('Currency'),
                        Account: res.Data[res.Data.map((account) => account.AccountId).indexOf(queryString.get('accountId'))]
                    })
                    this.fetchFundsAvailable(queryString.get('accountId'));
                }
                



                if(currencies.length === 1) {
                    if(res.Data.length === 1) {
                        this.fetchFundsAvailable(res.Data[0].AccountId);
                        this.setState({
                            AccountsAvailable: res.Data,
                            CurrenciesAvailable: currencies,
                            dataAvailable: true,
                            AccountId: res.Data[0].AccountId,
                            Account: res.Data[0],
                            Currency: currencies[0]
                        });
                    } else {
                        this.setState({
                            AccountsAvailable: res.Data,
                            CurrenciesAvailable: currencies,
                            dataAvailable: true,
                            Currency: currencies[0]
                        });
                    }
                } else {
                    this.setState({
                        AccountsAvailable: res.Data,
                        CurrenciesAvailable: currencies,
                        dataAvailable: true
                    });
                }

            }
        }).catch((err) => {
            console.log("err", err);
        })

        APIHelper.GetClientStatus().then((response) => {
            if (response) {
                var status = response.Data.State;
                if (status && status === 'ApplicationCompletedState' || status && status === "FicaDocumentsAcceptedState" || status && status === "FundsReceivedAndAllocatedState" || status && status === "SharesReceivedState") {
                    APIHelper.GetClientDetails().then(res => {
                        if (res) {
                            var data = res.Data;
                            if (data !== null) {
                                this.setState({ formData: data, isUSACitizen: data.IsUsaBased })
                            }
                        }
                    })
                    this.setState({ applicationComplete: true });

                    
                    APIHelper.GetClientBankAccounts().then((res) => {
                        if (res && res.Data) {
                            if (res.Data.length > 0 ) {
                                let data = res.Data[0];

                                this.setState({
                                    isBankingAccountAvailable: true,
                                    bankingFormData: data,
                                    editMode: false
                                });
                            } else {
                                this.setState({ isBankingAccountAvailable: false })
                            }
                        } else {
                            this.setState({ isBankingAccountAvailable: false })
                        }
                    })
                }
            }

            this.setState({ dataReady: true });
        })
    }
    handleWithDrawal() {
        const { fundsAvailable, withdrawAmount, withdrawalFee} = this.state;
        let newFundsAvailable =  parseFloat(fundsAvailable);
        let newWithdrawAmount = parseFloat(withdrawAmount);
        let newWithdrawalFee = parseFloat(withdrawalFee); 
        let maxAmount = newFundsAvailable-newWithdrawalFee;
        if(newFundsAvailable > 0 && newWithdrawAmount <= maxAmount)
        {
            this.setState({
                openModal: true,
            })
        }
        else
        {
            this.setState({
                openModal: false,
                ErrorContent: `You can only withdraw a maximum amount of ${this.convertToCurrency(this.state.Currency)} ${maxAmount}`,
                openErrorMOdel: true,

            })
        }
    }
    setOk = (ok) => {
        this.setState({
            isOk: ok,
        })
    }

    toggleCancelModal = () => {
        this.setState({showCancelConfirmation: !this.state.showCancelConfirmation});
    }
    renderCancelModal = () => {
        return (
            <Modal onSubmit={() => window.location.reload()} Ok={this.state.isOk} onCancel={this.toggleCancelModal} content={`This will cancel your withdrawal`} subContent="" modalType="Are you sure?" isModalOpen={this.toggleCancelModal} />
        )
    }
    renderModal = () => {
        return (
            <Modal onSubmit={this.setOk} Ok={this.state.isOk} onCancel={this.isModalOpen} content={`You are going to be withdrawing ${this.convertToCurrency(this.state.Currency)} ${this.state.withdrawAmount} from your account.`} subContent="Please confirm below" modalType="Are you sure?" isModalOpen={this.isModalOpen} />
        )
    }
    renderErrorModal = (content)=>{
        return(
            <ErrorModal content={content} subContent="Please try again" modalType="Error" isErrorModalOpen={this.isErrorModalOpen} />
        );
    }

    renderSuccessModal = (content)=>{
        return(
            <SuccessModal onCancel={this.closeSuccessModal} onSubmit={this.closeSuccessModal} content={content} subContent="" modalType="Withdrawal Successful" isModalOpen={this.closeSuccessModal} />
        );
    }

    closeSuccessModal = () => {
        this.setState({showSuccessMessage: false});
    }

    convertToCurrency=(currency) =>{
        switch(currency) {
            case "USD":
                return "USD";
                break;
            case "ZAR": 
                return "ZAR";
                break;
            case "SRC":
                return "SRC";
                break;
            case "EUR":
                return "EUR";
                break;
            case "GBP":
                return "GBP";
                break;
            default:
                return currency;
                break        
        }
    }

    onSubmit() {
        if (this.state.isOk) {
            const { WithdrawalFee, AccountId, Currency, withdrawAmount} = this.state;
            let WithdrawalModel = {
                AccountId: AccountId,
                Amount: withdrawAmount,
                Currency: Currency,
                WithdrawalFee: WithdrawalFee           
            }
           
            APIHelper.RequestWithdraw(WithdrawalModel).then((response) => {
                if (response.Success) {

                    this.setState({
                        withdrawAmount: 0,
                        withdrawAll: false,
                        loading: false,
                        isOk: false,
                        openModal: false,
                        showSuccessMessage: true
                    })

                    this.fetchFundsAvailable();
                }
                else
                {
                    this.setState({
                        ErrorContent: response.Message,
                        openErrorMOdel: true,
                        loading: false,
                        isOk: false,
                        openModal: false,
                    })
                }
            }).catch((err) => {
                this.setState({ loading: false});
                console.log("err", err);
            })
        }

    }

    isModalOpen = () => {
        const { openModal } = this.state;
        if (openModal) {
            this.setState({ openModal: !openModal });
        }
    }

    isErrorModalOpen = () =>{
        const {openErrorMOdel } = this.state;
        if(openErrorMOdel){
            this.setState({ openErrorMOdel: !openErrorMOdel });
        }
    }


    renderWithdrawalPanel = (isSubmitAllowed) => {
        const {showSuccessMessage, Currency, fundsAvailable, withdrawAmount, loading, openModal, openErrorMOdel, Account} = this.state;

        return (
            <div className={styles.withdrawals}>
               
            <div>


                {
                    this.state.showSuccessMessage ? this.renderSuccessModal("") : null
                }

                <div className={styles.withdrawalsContainer}>
                    <h3> {Account.Name}</h3>
                    <div >
                        <div>
                            <div className={styles.withdrawalLine}>Available funds to withdraw:</div> 
                             <div className={styles.withdrawalLineValue}>{this.state.fundsAvailable} {this.convertToCurrency(this.state.Currency)}</div>
                        </div>
                    </div>

                    <div>
                        <hr />

                        <div className={styles.withdrawalAmount}>Withdrawal Amount: <input type="number" value={this.state.withdrawAmount} disabled={!this.state.isBankingAccountAvailable} onChange={(event) => { this.handleChange(event) }} name="amount" min="0" /></div>

                        <div className={styles.radioInputs}>
                            <input disabled={!this.state.isBankingAccountAvailable} type="checkbox" onChange={() => { this.toggleWithdrawAll() }} checked={this.state.withdrawAll} /> Withdraw all
                        </div>
                        <hr />

                    </div>

                    <div>

                    <div >
                        <div>
                            <div >
                                 <div className={styles.withdrawalLine}>Transactional Fee:</div>
                                <div className={styles.withdrawalLineValue}>{this.state.withdrawalFee} {this.convertToCurrency(this.state.Currency)}</div>
                            </div>
                            <br/>

                            <div >
                                 <div className={styles.withdrawalLine}>Withdrawal Amount:</div>
                                <div className={styles.withdrawalLineValue}>{Number(this.state.withdrawAmount).toFixed(2)} {this.convertToCurrency(this.state.Currency)}</div>
                            </div>

                        </div>
                    </div>
                    <hr />
                    
                    {
                        Number(this.state.withdrawAmount) >= Number(this.state.withdrawalFee) ?
                        <div >
                        <div>
                            <div style={{fontWeight: "bold"}}>
                                 <div className={styles.withdrawalLine}>Total to be paid into your account:</div>
                                <div className={styles.withdrawalLineValue}>{(this.state.withdrawAmount - this.state.withdrawalFee).toFixed(2)} {this.convertToCurrency(this.state.Currency)}</div>
                            </div>

                        </div>
                    </div> : null
                    }
                    <br/>

                    
                        <div className={styles.submit}>
                            <button disabled={!this.state.isBankingAccountAvailable}  onClick={() => { this.toggleCancelModal()}} className={`${styles.withdrawalsBtn} ${styles.withdrawalsGhost} `}>CANCEL</button>
                            <button disabled={!this.state.isBankingAccountAvailable && this.state.loading || !isSubmitAllowed} onClick={() => { this.handleWithDrawal() }} className={`${styles.withdrawalsBtn} ${styles.withdrawalsSecondary}`}>WITHDRAW</button>
                        </div>

                    </div>

                </div>

            </div>
            {
                this.state.showCancelConfirmation ? this.renderCancelModal() : null
            }
            {
                this.state.openModal ? this.renderModal() : this.state.openErrorMOdel ? this.renderErrorModal(this.state.ErrorContent): null
            }
        </div>

        );
    }


    renderDisclaimer = () => {
        return (
            <div className={styles.fieldContainer}>
            <h4>Important Information:</h4>

            <ol className={styles.disclaimerLine}>
                <li>Please allow up to 5 business days for your withdrawal to be deposited into your banking account that we have on record.</li>
                <li>For compliance purposes, all withdrawal payments will be made to the named account holder, and not to any third parties.</li>
                <li>There is no minimum amount for withdrawals however, withdrawals are subjected to processing fees which will be charged from your trading account.</li>
                <li>MERJ charges a processing fee of $2.00 or its equivalent for each withdrawal.</li>
                <li>Note that the processing fee above excludes any bank charges you may incur as per the ABSA Seychelles Limited Fees & Charges Schedule available <a href='https://www.absa.sc/rates-and-fees/' target='_blank'>here</a>.</li>
            </ol>
            
           </div>
        );
    }


    updateCurrency = (e) => {
        const {AccountsAvailable} = this.state;

        var singleAccountForCurrency = AccountsAvailable.filter((account) => account.Currency === e.target.value);
        var hasSingleAccount = singleAccountForCurrency.length === 1;
        if(hasSingleAccount) {
            this.setState({
                Currency: e.target.value,
                AccountId: singleAccountForCurrency[0].AccountId,
                Account: singleAccountForCurrency[0]
            });
            this.fetchFundsAvailable(singleAccountForCurrency[0].AccountId);
        } else {

            this.setState({Currency: e.target.value});
        }

    }

    updateAccount = (e) => {
        if(e.target.value !== "DEFAULT") {

            var account = this.state.AccountsAvailable[this.state.AccountsAvailable.map((account) => account.AccountId).indexOf(e.target.value)];
            
            this.fetchFundsAvailable(e.target.value);
            
            this.setState({AccountId: e.target.value, Account: account});
        } else {
            this.setState({AccountId: "", Account: {}, fundsAvailable: null});
        }
    }

    renderIcon = () => {
        return (
            <div class={styles.iconMobile}>

            <svg style={{width: "50px"}}   version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 50 50" >
            <path style={{fill: "white"}} d="M25,0.4C11.4,0.4,0.4,11.4,0.4,25c0,13.6,11,24.6,24.6,24.6s24.6-11,24.6-24.6C49.6,11.4,38.6,0.4,25,0.4z
                M28.4,41.7h-6.8v-6.8h6.8V41.7z M28.4,30.3h-6.8V8.6h6.8V30.3z"/>
            </svg>

                </div>
        )
    }

    renderAccountFields = () => {
        const {AccountsAvailable, CurrenciesAvailable, Currency, AccountId} = this.state;
        let defaultCurrency = "";
        let defaultAccount = "";

        if(CurrenciesAvailable.length === 1) {
            defaultCurrency = CurrenciesAvailable[0];
        }



        var queryString = new URLSearchParams(window.location.search);
        let currencySelected =  Currency !== "";

        let accountPrepopulated = queryString.get('accountId') !== null;
        let accountDropdownDisabled = currencySelected && (accountPrepopulated && AccountsAvailable.length <= 1);

        return (
            <div className={styles.fieldContainer}>

                {
                    !this.state.isBankingAccountAvailable ? <div className={styles.noAccountBanner}><strong> {this.renderIcon()} <div style={{display: "inline-block"}}>Please add your bank account details by clicking <a className={styles.whiteLink} href="/banking">here</a>  in order to enter a withdrawal request.<br/> Note that MERJ will use these banking details for all withdrawals related to your account.</div> 
                  </strong></div> : null
                }


                <h4 className={styles.fieldTitle}>Select a currency and its respective account to make a withdrawal:</h4>
                
                <div className={styles.fieldCurrency}>
                    <strong>Currency</strong>
                    <select disabled={defaultCurrency !== ""} onChange={(e) => this.updateCurrency(e)} value={Currency}>
                        <option value={defaultCurrency} selected>{defaultCurrency !== "" ? defaultCurrency : "Please Select" }</option>
                        {
                            CurrenciesAvailable.map((currency) => {
                                return (
                                    <option key={currency} value={currency}>{currency}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className={styles.fieldAccount}>
                <strong>Account</strong>
                    <select disabled={accountDropdownDisabled} onChange={(e) => this.updateAccount(e)} value={AccountId}>
                        <option selected value="DEFAULT">Please Select</option>
                         {
                           AccountsAvailable.map((account) => {
                               if(account.Currency === Currency){
                                   return (
                                       <option key={account.AccountId} value={account.AccountId}>{account.Name}</option>
                                   )
                               }
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }

    render() {
        const {dataReady, withdrawAmount, fundsAvailable, isOk, AccountId} = this.state;


        if (!dataReady)
            return null;
        let isSubmitAllowed = Number(withdrawAmount) > 0 && Number(withdrawAmount) <= Number(fundsAvailable);
        if (isOk) {
            this.onSubmit();
        }

        return (
            <div>

             

                {
                    this.renderAccountFields()
                }
                {
                    fundsAvailable ?
                    this.renderWithdrawalPanel(isSubmitAllowed) : null
                }
                {
                    fundsAvailable ? this.renderDisclaimer() : null
                }
              
            </div>
        );
    }
}

export default WithdrawalsContent;