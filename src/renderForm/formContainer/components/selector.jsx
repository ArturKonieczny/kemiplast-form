import React from 'react';
import { labels } from '../formSettings/labels';

export class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.forProp = "qb_wp_lists_contact-" + this.props.fieldName;
    this.nameProp = "qb_wp_lists_contact[" + this.props.fieldName + "]";
    this.idProp = "qb_wp_lists_contact-" + this.props.fieldName;
    this.state = {
      options: this.props.data.map((option) => {
        return <option value={option.id} key={option.id}>{option.label}</option>
      }),
      value: '',
      product: this.props.product
    };
    this.onChange=this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const newOptions = nextProps.data.map((option) => {
      return <option value={option.id} key={option.id}>{option.label}</option>
    });
    const newProduct = nextProps.product;
    const newValue = (nextProps.product !== this.state.product) ? '' : this.state.value;
    this.setState({
      options: newOptions,
      value: newValue,
      product: newProduct
    });
  }

  onChange(ev) {
    const newValue = ev.target.value;
    this.setState({value: newValue},() => this.props.onChange(newValue));
  }

  render() {
    return (
      <tr className="qbf-field qbf-field-select">
        <td className="qbf-field-label"><span><label htmlFor={this.forProp}>{labels[this.props.fieldName]}</label></span></td>
        <td className="qbf-field-field">
          <select name={this.nameProp} className="qbf-select" id={this.idProp} onChange={this.onChange} value={this.state.value}>
            {this.state.options}
          </select>
        </td>
        <td className="qbf-field-error"><span></span></td>
      </tr>
);
  }
}
