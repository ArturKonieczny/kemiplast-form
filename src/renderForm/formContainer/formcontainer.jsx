import React from 'react';
import ReactDOM from 'react-dom';
import FormValidator from 'formvalidator';
import { formSettings, deliveryCost, deliveryOptions, labels } from './formSettings';
import { BoxSelector, Input, ProductSelector, Selector, SubmitButton } from './components';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    const initialProduct = this.props.formData.chosenProduct || 1;
    this.vForm = new FormValidator(formSettings);
    this.state = {
      product: initialProduct,
      price: this.props.formData[initialProduct].packages[0].price,
      weight: this.props.formData[initialProduct].packages[0].weight,
      ammount: true,
      ammountValue: '',
      delivery: 'personal',
      delName: true,
      delCity: true,
      delPostCode: true,
      delStreet: true,
      payment: 'cash',
      invoice: 'no',
      fvName: true,
      nip: true,
      fvCity: true,
      fvPostCode: true,
      fvStreet: true,
      notes: true,
      phone: true,
      email: true,
      form: false
    };

    this.validateField = this.validateField.bind(this);
    this.toggleRequired = this.toggleRequired.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.changeBox = this.changeBox.bind(this);
  }

  changeProduct(value) {
    this.setState({
      'product': value,
      'price': this.props.formData[value].packages[0].price,
      'weight': this.props.formData[value].packages[0].weight
    });
  }

  changeBox(value) {
    const chosenProduct = this.state.product;
    const packages = this.props.formData[chosenProduct].packages;
    const chosenPackage = packages.find((element) => {
      return element.id === value;
    });

    this.setState({
      'price': chosenPackage.price,
      'weight': chosenPackage.weight
    });
  }

  validateField(fieldName, value) {
    const field = this.vForm.form[fieldName];

    field.set('fieldValue', value);

    const newState = {};

    newState[fieldName] = field.get('valid');
    newState.form = this.vForm.validateForm();

    if (fieldName === 'ammount') {
      newState[fieldName + 'Value'] = value;
    }

    this.setState(newState);
  }

  validateForm() {
    const newState = {};

    newState.form = this.vForm.validateForm();

    for (const fieldName in this.state) {
      if (this.vForm.form[fieldName]) {
        newState[fieldName] = this.vForm.form[fieldName].get('valid');
      }
    };

    this.setState(newState);

    return newState.form;
  }

  toggleRequired(fieldName, value, elements, isRequired) {
    const newState = {};

    newState[fieldName] = value;

    elements.forEach((elementName) => {
      if (this.vForm.form[elementName]) {
        const element = this.vForm.form[elementName];

        element.set('isRequired', isRequired);
      };
    });

    newState.form = this.vForm.validateForm();
    this.setState(newState);
  }

  render() {
    return (
      <form id="qb_wb_lists_contact" className="qbf" method="post">
        <table id="qb_wb_lists_contact_container" className="qbf-container">
          <tbody>
            <ProductSelector label={labels['product']} data={this.props.formData} fieldName="product" onChange={this.changeProduct}/>
            <BoxSelector label={labels['box']} data={this.props.formData[this.state.product].packages} product={this.state.product} fieldName="box" onChange={this.changeBox}/>
            <Input label={labels['ammount']} fieldName="ammount" type="text" onChange={this.validateField} valid={this.state.ammount} />
            <Selector label={labels['delivery']} fieldName="delivery" data={deliveryOptions} elements={['delName', 'delCity', 'delPostCode', 'delStreet']} onChange={this.toggleRequired} />
            <Input label={labels['delName']} fieldName="delName" type="text" onChange={this.validateField} valid={this.state.delName} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delCity']} fieldName="delCity" type="text" onChange={this.validateField} valid={this.state.delCity} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delPostCode']} fieldName="delPostCode" type="text" onChange={this.validateField} valid={this.state.delPostCode} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delStreet']} fieldName="delStreet" type="text" onChange={this.validateField} valid={this.state.delStreet} isHidden={this.state.delivery==='personal'} />

            <Input label={labels['phone']} fieldName="phone" type="text" onChange={this.validateField} valid={this.state.phone} />
            <Input label={labels['email']} fieldName="email" type="text" onChange={this.validateField} valid={this.state.email} />
            <SubmitButton form={this.state.form} submit={this.validateForm}/>
          </tbody>
        </table>
      </form>
    );}
};
