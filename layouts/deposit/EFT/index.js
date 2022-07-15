import React from 'react';
import styles from '../styles.scss'
import CurrencySelect from '../../../components/CountryCurrencyDropDown';
import Spinner from '../../../components/Spinner';
import * as APIHelper from '../../../utils/APIHelper';

export default class EFTSection extends React.Component {

    constructor() {
        super()
        this.state = {
            currency: "",
            Model: null,
            isCurrencySelected: false,
            dataAvailable: false,
            isLoading: false
        }
    }

    getBankingData = () => {
        const { isCurrencySelected,  currency } = this.state;
        let object = {};
        let CorrespondingBank = {};
        if (isCurrencySelected && currency != "") {

            APIHelper.GetTenantBankingDetails(currency).then((response) => {
                if (response) {
                    object.InstitutionName = response.Data.InstitutionName;
                    object.AccountHolder = response.Data.AccountHolder;
                    object.AccountNumber = response.Data.AccountNumber;
                    object.SwiftBIC = response.Data.SwiftBIC;
                    object.BranchCode = response.Data.BranchCode;
                    object.IBAN = response.Data.IBAN;
                    object.BankAddress = response.Data.BankAddress;
                    object.AccountCurrency = response.Data.AccountCurrency;
                    object.PaymentReference = response.Data.PaymentReference;

                    if(response.Data.CorrespondingBank) {
                        CorrespondingBank.BeneficiaryName = response.Data.CorrespondingBank.BeneficiaryName
                        CorrespondingBank.BeneficiaryBank = response.Data.CorrespondingBank.BeneficiaryBank
                        CorrespondingBank.BeneficiaryAccountNo = response.Data.CorrespondingBank.BeneficiaryAccountNumber
                        CorrespondingBank.BeneficiaryAddressLine1 = response.Data.CorrespondingBank.BeneficiaryBankAddress
                        CorrespondingBank.CorrespondentBankName = response.Data.CorrespondingBank.CorrespondentBankName
                        CorrespondingBank.CorrespondentBankAddress = response.Data.CorrespondingBank.CorrespondentBankAddress
                        CorrespondingBank.CorrespondentBankSwift = response.Data.CorrespondingBank.CorrespondentBankSwift
                        CorrespondingBank.CorrespondentBankRouting = response.Data.CorrespondingBank.CorrespondentBankRouting
                    }

                    object.CorrespondingBank = CorrespondingBank;

                    this.setState({
                        Model: object,
                        dataAvailable: true,
                        isCurrencySelected: false,
                        isLoading: false
                    });
                }
            }).catch(err => {
                console.error(err);
            });
        }
    }

    onSelect = (event) => {
        const value = event.target.value.value || event.target.value;
        this.setState({ currency: value, isCurrencySelected: true, isLoading: true });
    }

    renderCurrencyField = () => {
        const { currency } = this.state;
        return (
            <section>
                <div className={styles.currencyDropDown}>
                    <label>
                        Select currency to fund your account
                        <CurrencySelect key='EFT' group='EFT' isRequired={true} value={currency} handleChange={(event) => { this.onSelect(event) }} />
                    </label>
                    <hr />
                </div>
            </section>
        );
    }

    renderDepositInformation = () => {
        return (
            <section>
                <div>
                    <h4>Important Information:</h4>
                    <ol className={styles.depositInfo}>
                        <li> Please reference your MERJ Client Number in the payment instruction.</li>
                        <li> Please allow up to 5 business days to process your deposit(s).</li>
                        <li> We do not allow third party payments. All payments must be made by the account holder.</li>
                        <li> There is no minimum funding amount for bank transfers.</li>
                    </ol>
                    <a href='/enquiries/general/faqs' className={styles.depositInfoLink}>Click here for more information</a>
                </div>
            </section>
        );
    }

    render() {
        const { dataAvailable, isCurrencySelected, isLoading } = this.state;
        if (isCurrencySelected)
            this.getBankingData();

        return (
            <section>
                <>
                    {
                        this.renderCurrencyField()
                    }
                </>
                

                {
                    isLoading ?  <Spinner />: 
                
                dataAvailable ? 
                <div>
                    <>
                        {
                            this.renderDepositInformation()
                        }
                    </>
                    <div className={styles.eftDataContainer}>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Institution Name:</div>
                            <div>{this.state.Model.InstitutionName}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Account Holder:</div>
                            <div>{this.state.Model.AccountHolder}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Account Number</div>
                            <div>{this.state.Model.AccountNumber}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Branch Code:</div>
                            <div>{this.state.Model.BranchCode}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>SWIFT BIC:</div>
                            <div>{this.state.Model.SwiftBIC}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>IBAN:</div>
                            <div>{this.state.Model.IBAN}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Bank Address:</div>
                            <div>{this.state.Model.BankAddress}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Account Currency</div>
                            <div>{this.state.Model.AccountCurrency}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Payment Reference</div>
                            <div>{this.state.Model.PaymentReference}</div>
                        </div>
                    </div>

                    <hr />

                    {
                        this.state.currency == "USD" && this.state.Model.CorrespondingBank?
                        <div style={{fontSize: "12px"}} className={styles.eftDataContainer}>
                            <h4>Some US Banks may require some of these details:</h4>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Beneficiary Name:</div>
                            <div>{this.state.Model.CorrespondingBank.BeneficiaryName}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Beneficiary Bank:</div>
                            <div>{this.state.Model.CorrespondingBank.BeneficiaryBank}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Beneficiary Account No:</div>
                            <div>{this.state.Model.CorrespondingBank.BeneficiaryAccountNo}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Beneficiary Address:</div>
                            <div >{this.state.Model.CorrespondingBank.BeneficiaryAddressLine1}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Correspondent Bank Name:</div>
                            <div>{this.state.Model.CorrespondingBank.CorrespondentBankName}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Correspondent Bank Address:</div>
                            <div>{this.state.Model.CorrespondingBank.CorrespondentBankAddress}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Correspondent Bank Swift:</div>
                            <div>{this.state.Model.CorrespondingBank.CorrespondentBankSwift}</div>
                        </div>
                        <div className={styles.eftDataRows}>
                            <div className={styles.eftDataTitles}>Correspondent Bank Routing:</div>
                            <div>{this.state.Model.CorrespondingBank.CorrespondentBankRouting}</div>
                        </div>
                    </div> : null
                    }

                </div> : null}
            </section>
        );
    }

}