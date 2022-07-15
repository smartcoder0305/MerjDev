import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import helpers from '../../static/styles/helpers.scss';
import dateFormat from '../../utils/time';
import Select from './Select';
import CountrySelect from '../CountryDropDown';
import CurrencySelect from '../CountryCurrencyDropDown';
import MobileCountrySelect from '../MobileCountryDropDown';
import { Picker } from 'velocity-trade-date-picker';
import convertDateStringToNotPrettyDate from '../../utils/time/convertDateStringToNotPrettyDate';
import Button from '../Button';
import { ValFuncs, ValData } from 'vt.apiclient';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.expiryDate = React.createRef();
    this.onApplicantTypeChange = this.onApplicantTypeChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.setFormField = this.setFormField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.form = React.createRef();
    this.state = {
      form: {},
      IDType: null,
      GuardianIDType: null,
      applicantSelector: '',
      dateValue: Form.DateNow(),
      DateOfincorporationValue: Form.DateNow(),
      PassportDateValue: Form.DateNow(),
      showPostalCode: false,
      showCompanyPostalCode: false,
      showGuardianPostalCode: false,
      showBankingPostalCode: false,

    };
    Form.DateNow();
  }

  static propTypes = {
    title: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        pattern: PropTypes.string,
        label: PropTypes.string,
        subText: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string,// required when type === 'checkboxes' 
          }),
        ), // only applicable to type === 'select' || type === 'checkboxes',
        isRequired: PropTypes.bool,
        hasIDType: PropTypes.bool
      }),
    ),
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    handleSubmit: PropTypes.func,
    emailAddress: PropTypes.string,
    formType: PropTypes.string,
    action: PropTypes.string, // URL to post to if handleSubmit not provided
    children: PropTypes.node,
    getForm: PropTypes.object
  };

  static defaultProps = {};

  static DateNow = () => {
    const timeNow = new Date();
    const dateInUTC = new Date(Date.UTC(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate()));
    return dateInUTC;
  }



  //Set on load
  setPostcodeFields = () => {
    const { isReadOnly, getForm } = this.props;

    if (isReadOnly) {
      var individual = getForm.Country;
      var group = getForm.GroupCountry;
      var guardian = getForm.GuardianCountry;
      var banking = getForm.AddressCountry;


      var stateObj = {
        showPostalCode: false,
        showCompanyPostalCode: false,
        showGuardianPostalCode: false,
        showBankingPostalCode: false,
      }



      if (individual) {
        var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(individual);
        if (!isCodelessCountry) {
          stateObj.showPostalCode = true;
        }
      }

      if (group) {
        var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(group);
        if (!isCodelessCountry) {
          stateObj.showCompanyPostalCode = true;
        }
      }

      if (guardian) {
        var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(guardian);
        if (!isCodelessCountry) {
          stateObj.showGuardianPostalCode = true;
        }
      }

      if (banking) {
        var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(banking);
        if (!isCodelessCountry) {
          stateObj.showBankingPostalCode = true;
        }
      }



      this.setState({ ...stateObj })


    }

  }

  componentDidMount() {
    const { emailAddress, formType, getForm, isReadOnly } = this.props;
    let label = "Email";
    if (formType === "Company") {
      label = "GuardianEmail";
    }
    this.setFormField(emailAddress, label);

    if (isReadOnly) {
      this.setPostcodeFields();
      this.setState({ IDType: getForm.IDType })
    }




  }

  onApplicantTypeChange(event, fieldName, optionName) {
    const { form } = this.state;
    const { handleSubmit } = this.props;
    const value = optionName;
    this.setState({
      applicantSelector: value
    })
    this.setFormField(value, fieldName);
    handleSubmit(form);
  }

  onChange(event, fieldName) {
    const value = event.target.value.value || event.target.value;

    const isCountryChange = fieldName == "Country" || fieldName == "GroupCountry" || fieldName == "GuardianCountry" || fieldName == "AddressCountry";

    //Show or hide appropriate postalcode field.
    if (isCountryChange) {

      var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(value);
      var stateObj = {};

      switch (fieldName) {
        case 'Country':
          stateObj.showPostalCode = !isCodelessCountry;
          break;
        case 'GroupCountry':
          stateObj.showCompanyPostalCode = !isCodelessCountry;
          break;
        case 'GuardianCountry':
          stateObj.showGuardianPostalCode = !isCodelessCountry;
          break;
        case 'AddressCountry':
          stateObj.showBankingPostalCode = !isCodelessCountry;
          break;
      }

      this.setState({ ...stateObj });
    }


    if (isCountryChange) {
      var validityMessage = ValFuncs.isCountryPostcode(3, 8, fieldName, value, this.state.form);
      var isPostalCodeValid = validityMessage == "";
      if (!isPostalCodeValid) {
        event.target.setCustomValidity(validityMessage);
      }
    }


    if (isCountryChange) {
      var isCodelessCountry = ValFuncs.matchIsCodelessCountry.has(value);

      //determine the postalCodefield.
      switch (fieldName) {
        //blank it out to empty string.
        case 'Country':
          this.setFormField("", "PostalCode");
          break;
        case 'GroupCountry':
          this.setFormField("", "GroupPostalCode");
          break;
        case 'GuardianCountry':
          this.setFormField("", "GuardianPostalCode");
          break;
        case 'AddressCountry':
          this.setFormField("", "AddressPostCode");
          break;

      }

      this.setFormField(value, fieldName);

    } else {
      this.setFormField(value, fieldName);
    }



  }

  onSelect(event, fieldName) {
    const value = event.target.value.value || event.target.value;
    if (fieldName === "GuardianIDType") {
      this.setState({
        GuardianIDType: value
      })
      this.setFormField(value, fieldName);

    } else if (fieldName === "IDType") {
      this.setState({
        IDType: value,
      })
      this.setFormField(value, fieldName);
    } else {
      return;
    }

  }

  setFormField(value, fieldName) {
    const { form } = this.state;

    if (value === '') {
      delete form[fieldName];
    } else {
      form[fieldName] = value;
    }
    this.setState({
      form,
    });
  }

  onSubmit(event) {
    const { form } = this.state;
    const { handleSubmit } = this.props;
    event.preventDefault();

    handleSubmit(form);
  }

  onCustomSubmit = (event) => {
    const { handleSubmit } = this.props;
    event.preventDefault();
    if (this.form.current.reportValidity()) {
      var formData = new FormData(this.form.current);
      var object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      })
      handleSubmit(object);
    }
  }
  withThreeMonths = (check) => {
    let now = new Date();
    let newDate = new Date(now.setMonth(now.getMonth() + 3));
    return (check === newDate || check > newDate);
  }

  isFutureDate = (check) => {
    let now = new Date();
    return (check > now);
  }

  isMoreThanHundredYearsAgo = (check) => {
    let now = new Date();
    let newDate = new Date(now.setFullYear(now.getFullYear() - 100));

    return (check < newDate);
  }

  checkPastdate = (check) => {
    var now = new Date();
    if (check.getFullYear() !== now.getFullYear()) {
      return (check.getFullYear() > now.getFullYear());
    } else {
      if (check.getMonth() !== now.getMonth()) {
        return (check.getMonth() > now.getMonth());
      } else {
        return (check.getDate() > now.getDate());
      }
    }
  }
  onDateChange = (value, fieldName) => {
    switch (fieldName) {
      case 'DateOfIncorporation':
        this.setState({
          DateOfincorporationValue: value
        });
        this.setFormField(value, fieldName);
        break;
      case 'DateOfBirth':
      case "GuardianDateOfBirth":
        this.setState({
          dateValue: value
        });
        this.setFormField(value, fieldName);
        break;
      case 'GuardianPassportExpiryDate':
      case 'PassportExpiryDate':
        this.setState({
          PassportDateValue: value
        });
        this.setFormField(value, fieldName);
        break;
      default:
        return;
    }
  }

  checkDate = (check) => {
    return this.withThreeMonths(check) && this.checkPastdate(check);
  }

  checkDateOfBirthDate = (check) => {
    return this.isFutureDate(check) || this.isMoreThanHundredYearsAgo(check);
  }

  render() {
    const { form, IDType, GuardianIDType, applicantSelector, dateValue, DateOfincorporationValue, PassportDateValue } = this.state;
    const { fields, isDisabled, isReadOnly, children, action, getForm, emailAddress, formType } = this.props;

    let isPassportExpiryValid = this.checkDate(PassportDateValue);
    let dateValidityElement = <div></div>;

    let isDateOfBirthValid = !this.checkDateOfBirthDate(dateValue);
    let dateofBirthValidityElement = <div></div>;


    let isDateofIncorporationValid = !this.isFutureDate(DateOfincorporationValue);
    let dateOfIncorporationValidityElement = <div></div>;

    if (!isPassportExpiryValid) {
      if (this.checkPastdate(PassportDateValue)) {
        dateValidityElement = (<input name="PassportExpiryValidity" required onInvalid={(e) => e.target.setCustomValidity("Your passport is expiring within the next 3 months. Please choose another Identification Type.")} style={{ opacity: 0, width: '0px', position: "absolute" }}></input>);
      }
      else {
        dateValidityElement = (<input name="PassportExpiryValidity" required onInvalid={(e) => e.target.setCustomValidity("Invalid Passport Expiry Date.")} style={{ opacity: 0, width: '0px', position: "absolute" }}></input>);
      }
    }
    else {
      dateValidityElement = (null);
    }

    if (!isDateOfBirthValid) {
      dateofBirthValidityElement = (<input name="DateOfBirthValidity" required onInvalid={(e) => e.target.setCustomValidity("Invalid Date of Birth.")} style={{ opacity: 0, width: '0px', position: "absolute" }}></input>);
    }
    else {
      dateofBirthValidityElement = (null);
    }

    if (!isDateofIncorporationValid) {
      dateOfIncorporationValidityElement = (<input name="DateOfIncorporationValidity" required onInvalid={(e) => e.target.setCustomValidity("Invalid Date of Incorporation.")} style={{ opacity: 0, width: '0px', position: "absolute" }}></input>);
    }
    else {
      dateOfIncorporationValidityElement = (null);
    }

    return (
      <form action={action} ref={this.form} method={action && 'POST'} onSubmit={!action ? this.onSubmit : e => { e.preventDefault }} >
        {
          fields.map((section) => {
            return (
              <div key={section.title} className={section.applicationStyle ? styles.applicationStyle : null}>
                <h3>{section.title}</h3>
                {
                  section.fields.map((field) => {
                    let value = '';
                    if (isReadOnly) {
                      for (var key in getForm) {
                        if (key === field.name) {
                          if (field.type === "email") {
                            value = emailAddress;
                          }
                          if (field.type === "date") {
                            value = new Date(getForm[key]);
                          }
                          else {
                            if (getForm.IsIndividual && getForm.IDType === field.IDType) {
                              if (key === 'IDNumber' || key === 'PassportNumber') {
                                if (getForm[key] !== '') {
                                  value = getForm[key];
                                }
                              }
                              if (key === "CountryOfIssue") {
                                if (getForm[key] !== '') {
                                  value = getForm[key];
                                }
                              }
                            }
                            if (getForm.IsGroup && getForm.GuardianIDType === field.GuardianIDType) {
                              if (key === "GuardianPassportNumber") {
                                if (getForm[key] !== '') {
                                  value = getForm[key];
                                }
                              }
                              if (key === "GuardianIDNumber") {
                                if (getForm[key] !== '') {
                                  value = getForm[key];
                                }
                              }
                              if (key === "GuardianCountryOfIssue") {
                                if (getForm[key] !== '') {
                                  value = getForm[key];
                                }
                              }
                            }
                            else {
                              value = getForm[key];
                            }
                          }

                        }
                        if (key === field.name && field.name === "IsUsaBased") {
                          value = getForm[key] ? "Yes" : "No";
                        }
                      }
                    } else {
                      value = form[field.name];
                    }

                    const inputComponent =
                      field.type === 'checkboxes' ? (
                        <fieldset name={field.name}>
                          {field.options.map((option) => {
                            value = form[option.name];

                            return (
                              <div key={option.name} className={styles.row}>
                                <input
                                  name={option.name}
                                  type="checkbox"
                                  onChange={(event) => this.onChange(event, option.name)}
                                  value={value !== 'Y' ? 'Y' : ''}
                                  required={option.isRequired}
                                  checked={value === 'Y'}
                                />
                                <label htmlFor={option.name} className={styles.smallLabel}>
                                  {option.label ? option.label : option.value}
                                </label>
                                <div dangerouslySetInnerHTML={{ __html: option.description }} />
                              </div>
                            );
                          })}
                        </fieldset>
                      )
                        : field.type === 'radio' ? (
                          applicantSelector === field.name ?
                            <div>
                              <label htmlFor={field.name} className={styles.withBackground}>
                                <div >
                                  {field.label ? field.label : field.value}
                                </div>
                                <input
                                  name={field.applicantType}
                                  type={field.type}
                                  onChange={(event) => this.onApplicantTypeChange(event, field.applicantType, field.value)}
                                  disabled={field.isDisabled || isReadOnly}
                                  className={styles.detailsRadio}
                                />
                              </label>

                            </div> :
                            <div>
                              <label htmlFor={field.name} className={styles.radioInput} >
                                <div >
                                  {field.label ? field.label : field.value}
                                </div>

                                <input
                                  name={field.applicantType}
                                  type={field.type}
                                  onChange={(event) => this.onApplicantTypeChange(event, field.applicantType, field.value)}
                                  disabled={field.isDisabled || isReadOnly}
                                  className={styles.detailsRadio}
                                  id={field.name}
                                />
                              </label>

                            </div>
                        ) : field.type === 'currencySelect' ? (
                          <CurrencySelect
                            key={field.name}
                            name={field.name}
                            group={field.group}
                            isRequired={field.isRequired}
                            onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                            value={value || ''}
                            handleChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                            disabled={isReadOnly}
                          />
                        ) : field.type === 'countrySelect' ? (
                          <CountrySelect
                            name={field.name}
                            key={field.name}
                            isRequired={field.isRequired}
                            onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                            value={value || ''}
                            handleChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                            disabled={isReadOnly}
                          />
                        ) : field.type === 'mobileCountrySelect' ? (
                          <MobileCountrySelect
                            key={field.name}
                            isRequired={field.isRequired}
                            onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                            value={value || ''}
                            handleChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                            disabled={isReadOnly}
                          />
                        )
                                : field.type === 'textarea' ? (
                                  <textarea
                                    name={field.name}
                                    type={field.type}
                                    rows="5"
                                    onChange={(event) => this.onChange(event, field.name)}
                                    value={value || ''}
                                    required={field.isRequired}
                                    disabled={isReadOnly}
                                  />
                                ) : field.type === 'date' ? (
                                  <div className={`${styles.picker}`}>
                                    {
                                      field.name === "DateOfIncorporation" ?
                                        <div>{dateOfIncorporationValidityElement}
                                          <Picker
                                            name={field.name}
                                            isDisabled={field.isDisabled || isReadOnly}
                                            date={!isReadOnly ? DateOfincorporationValue : value}
                                            onDateChange={(e) => { this.onDateChange(e, field.name) }} />
                                        </div>
                                        : field.name === 'GuardianDateOfBirth' || field.name === 'DateOfBirth' ?
                                          <div>{dateofBirthValidityElement}
                                            <Picker
                                              name={field.name}
                                              isDisabled={field.isDisabled || isReadOnly}
                                              date={!isReadOnly ? dateValue : value}
                                              onDateChange={(e) => { this.onDateChange(e, field.name) }} />
                                          </div>
                                          :
                                          field.name === 'GuardianPassportExpiryDate' || field.name === 'PassportExpiryDate' ?
                                            <div>{dateValidityElement}
                                              <Picker
                                                id={field.name}
                                                name={field.name}
                                                isDisabled={field.isDisabled || isReadOnly}
                                                date={isReadOnly ? value : PassportDateValue}
                                                onDateChange={(e) => { this.onDateChange(e, field.name) }} />
                                            </div> : null
                                    }
                                  </div>
                                ) : field.type === 'select' ? (
                                  field.hasIDType ?
                                    (
                                      <Select
                                        key={field.name}
                                        value={value || ''}
                                        isRequired={field.isRequired}
                                        onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                        options={field.options}
                                        handleChange={(event) => { this.onSelect(event, field.name); event.target.setCustomValidity("") }}
                                        disabled={isReadOnly}
                                      />
                                    ) : (
                                      <Select
                                        key={field.name}
                                        value={value || ''}
                                        isRequired={field.isRequired}
                                        onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                        options={field.options}
                                        handleChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                        disabled={isReadOnly}
                                      />
                                    )

                                ) : field.type == "email" ? (

                                  <input
                                    name={field.name}
                                    type={field.type}
                                    pattern={field.pattern}
                                    title={field.title}
                                    onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                    value={emailAddress}
                                    required={field.isRequired}
                                    readOnly={true}
                                    disabled={field.isDisabled || isReadOnly}
                                  />
                                ) : (
                                          ((field.IDType !== null || field.GuardianIDType !== null) && (field.IDType === IDType || field.GuardianIDType === GuardianIDType)) || (getForm.GuardianIDType === field.GuardianIDType || getForm.IDType === field.IDType) ? (
                                            (field.name == "PostalCode") ?
                                              !this.state.showPostalCode ? null :
                                                <input
                                                  name={field.name}
                                                  type={field.type}
                                                  pattern={field.pattern}
                                                  onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                                  onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                                  value={value || ''}
                                                  required={field.isRequired}
                                                  disabled={field.isDisabled || isReadOnly}
                                                /> :
                                              (field.name == "GroupPostalCode") ?
                                                !this.state.showCompanyPostalCode ? null :
                                                  <input
                                                    name={field.name}
                                                    type={field.type}
                                                    pattern={field.pattern}
                                                    onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                                    onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                                    value={value || ''}
                                                    required={field.isRequired}
                                                    disabled={field.isDisabled || isReadOnly}
                                                  />
                                                :
                                                (field.name == "GuardianPostalCode") ?
                                                  !this.state.showGuardianPostalCode ? null :
                                                    <input
                                                      name={field.name}
                                                      type={field.type}
                                                      pattern={field.pattern}
                                                      onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                                      onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                                      value={value || ''}
                                                      required={field.isRequired}
                                                      disabled={field.isDisabled || isReadOnly}
                                                    /> :
                                                  (field.name == "AddressPostCode") ?
                                                    !this.state.showBankingPostalCode ? null :
                                                      <input
                                                        name={field.name}
                                                        type={field.type}
                                                        pattern={field.pattern}
                                                        onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                                        onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                                        value={value || ''}
                                                        required={field.isRequired}
                                                        disabled={field.isDisabled || isReadOnly}
                                                      />
                                                    : <input
                                                      name={field.name}
                                                      type={field.type}
                                                      pattern={field.pattern}
                                                      onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                                      onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                                      value={value || ''}
                                                      required={field.isRequired}
                                                      disabled={field.isDisabled || isReadOnly}
                                                    />

                                          )
                                            :
                                            <input
                                              name={field.name}
                                              type={field.type}
                                              pattern={field.pattern}
                                              title={field.title}
                                              onInvalid={(e) => e.target.setCustomValidity(field.validationMessage)}
                                              onChange={(event) => { this.onChange(event, field.name); event.target.setCustomValidity("") }}
                                              value={value || ''}
                                              required={field.isRequired}
                                              disabled={field.isDisabled || isReadOnly}
                                            />
                                        );

                    const requiredComponent = field.isRequired && <span className={styles.warning}>*</span>;

                    const hintComponent = field.hint && <span className={styles.warning}>{field.hint}</span>;

                    const subTextComponent = field.subText && <p>{field.subText}</p>;

                    var postCodeLabelComponent = null;

                    const labelComponent = (
                      <div>
                        <label htmlFor={field.name}>{field.label}</label>

                        {requiredComponent}
                      </div>
                    )

                    switch (field.name) {
                      case 'PostalCode':
                        postCodeLabelComponent =
                          this.state.showPostalCode ? labelComponent : null;
                        break;
                      case "GroupPostalCode":
                        postCodeLabelComponent =
                          this.state.showCompanyPostalCode ? labelComponent : null;
                        break;
                      case "GuardianPostalCode":
                        postCodeLabelComponent =
                          this.state.showGuardianPostalCode ? labelComponent : null;
                        break;
                      case "AddressPostCode":
                        postCodeLabelComponent =
                          this.state.showBankingPostalCode ? labelComponent : null;
                        break;
                    }


                    return (
                      <div className={helpers.inputWrapper && field.type === 'radio' ? styles.detailsFormRadio : null} key={field.name}>
                        {
                          (field.IDType === undefined && field.GuardianIDType === undefined) || (field.IDType === IDType || field.GuardianIDType === GuardianIDType) ? (
                            <div>
                              {
                                field.type !== 'radio' ?
                                  field.name == "PostalCode" || field.name == "GroupPostalCode" || field.name == "GuardianPostalCode" || field.name == "AddressPostCode" ?
                                    postCodeLabelComponent : labelComponent : null
                              }
                              {subTextComponent}

                              {inputComponent}
                              {hintComponent}
                            </div>
                          ) : (null)
                        }
                      </div>
                    );

                  })
                }
                <div className={styles.submitContainer}>
                  {children}
                  {
                    (section.submitButton && section.submitButton !== undefined && formType !== undefined) && !isReadOnly ?
                      (
                        <input type={section.submitButton.type} value={section.submitButton.value} name={section.submitButton.name} disabled={this.props.isLoading} className={section.submitButton.name} />
                      ) : formType === undefined && !isReadOnly ? (
                        <Button secondary={true} disabled={this.props.isLoading} text={section.submitButton.value} primary={section.submitButton.primary} secondary={section.submitButton.secondary} handleClick={(e) => this.onCustomSubmit(e)} />
                      ) : (null)
                  }
                </div>
              </div>
            );
          })
        }
        {/* {children} */}

      </form>
    );
  }
}
