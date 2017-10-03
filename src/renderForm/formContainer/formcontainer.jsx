import React from 'react';
import ReactDOM from 'react-dom';
import FormValidator from 'formvalidator';
import {SubmitButton} from './components/submitbutton.jsx';
import {ProductSelector} from './components/productselector.jsx';
import {Selector} from './components/selector.jsx';
import {formSettings} from './formSettings/formSettings';
import {delivery} from './formSettings/delivery';
import {Input} from './components/input.jsx';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    const initialProduct = this.props.formData.chosenProduct || 1;
    this.vForm = new FormValidator(formSettings);
    this.state = {
      product: initialProduct,
      box: this.props.formData[initialProduct].packages[0].id,
      price: this.props.formData[initialProduct].packages[0].price,
      weight: this.props.formData[initialProduct].packages[0].weight,
      ammount: true,
      ammountValue: '',
      delivery: 'personal',
      deliveryCost: '',
      totalCost: '',
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
    this.changeDelivery = this.changeDelivery.bind(this);
  }

  changeProduct(value) {
    this.setState({
      'product': value,
      'box': this.props.formData[value].packages[0].id,
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

  changeDelivery(value) {
    this.setState({
      'deliveryCost': delivery[value]
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

  toggleRequired(selectElement, elements) {
    const newState = {};

    newState[selectElement.name] = selectElement.value;

    elements.forEach((elementName) => {
      if (this.vForm.form[elementName]) {
        const element = this.vForm.form[element];

        element.set('isRequired', element.get('isRequired') ? false : true);
      };
    });

    this.setState(newState);
  }

  render() {
    return (
      <form id="qb_wb_lists_contact" className="qbf" method="post">
        <table id="qb_wb_lists_contact_container" className="qbf-container">
          <tbody>
            <ProductSelector data={this.props.formData} fieldName="product" onChange={this.changeProduct}/>
            <Selector data={this.props.formData[this.state.product].packages} product={this.state.product} fieldName="box" onChange={this.changeBox}/>
            <Input fieldName="ammount" type="text" onChange={this.validateField} valid={this.state.ammount} />
            <Input fieldName="phone" type="text" onChange={this.validateField} valid={this.state.phone} />
            <Input fieldName="email" type="text" onChange={this.validateField} valid={this.state.email} />
            <SubmitButton form={this.state.form} submit={this.validateForm}/>
          </tbody>
        </table>
      </form>
    );}
};
