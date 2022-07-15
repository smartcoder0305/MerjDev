import React from 'react';
import PropTypes from 'prop-types';
import * as APIHelper from '../../utils/APIHelper';

export default class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.setInitialValue = this.setInitialValue.bind(this);
    this.state = {
      options: ['Please select currency'],
      isLoading: true
    }
  }

  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    onInvalid: PropTypes.func,
    disabled: PropTypes.bool
  }
  static defaultProps = {};

  componentDidMount() {
    
    const { group } = this.props;
    if (group == "BITPAY") {
      APIHelper.GetConfig().then((app) => {
        this.setState({
          options: [app.BitPayCurrency],
          isLoading: false
        });
      });
    }else if(group =="EFT"){ 
        APIHelper.GetDropDownData().then((response) => {
          if (response) {
            this.setState({
              options: response.Data.BrokerCurrencyList,
              isLoading: false
            })
          }
      }).catch((err) => {
          return err;
      });
    }

    const { value } = this.props;
    if (value !== '') {
      if (!value) {
        this.setInitialValue();
      }
    }
  }

  setInitialValue() {
    const { handleChange } = this.props;
    const { options } = this.state;

    const syntheticEvent = {
      target: {
        value: options[0],
      },
    };

    handleChange(syntheticEvent);
  }
  render() {
    const { options, isLoading } = this.state;
    const { value, handleChange, isRequired, name, disabled } = this.props;

    return (
      <select onInvalid={this.props.onInvalid} required={isRequired} value={value} name={name} onChange={handleChange} disabled={disabled}>
        {
          disabled ? <option>{ value } </option>:
        <>
        <option value=''> {isLoading ? "Loading..." : "Please select"}</option>
        {options.map((option) => {
          return (
            <option key={option} value={option} >
              {option}
            </option>
          );
        })}
        </>
      }
      </select>
    );
  }
}