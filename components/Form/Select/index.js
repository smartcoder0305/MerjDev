import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.setInitialValue = this.setInitialValue.bind(this);
  }

  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
    isRequired: PropTypes.bool, 
    handleChange: PropTypes.func,
    onInvalid: PropTypes.func,
    disabled: PropTypes.bool
  };

  static defaultProps = {};

  componentDidMount() {
    const {value} = this.props;
    if(value !== ''){
      if (!value) {
        this.setInitialValue();
      }
    }
  }

  setInitialValue() {
    const { options, handleChange } = this.props;

    const syntheticEvent = {
      target: {
        value: options[0],
      },
    };

    handleChange(syntheticEvent);
  }

  render() {
    const { value, options, handleChange,disabled} = this.props;
    return (
      <select onInvalid={this.props.onInvalid} required={this.props.isRequired} value={value} onChange={handleChange} disabled={disabled}>
        { 
          disabled ?<option >{value}</option>
          :
          (options.map((option) => {
          return (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          );
        }))
        
        }
      </select>
    );
  }
}
