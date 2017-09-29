import React from 'react';
import ReactDOM from 'react-dom';
import FormValidator from 'formvalidator';
import {SubmitButton} from './components/submitbutton.jsx';
import {Selector} from './components/selector.jsx';
import {formSettings} from './formSettings/formSettings';
import {delivery} from './formSettings/delivery';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.vForm = new FormValidator(formSettings);
    this.state = {
      product: this.props.chosenProduct,
      price: '',
      weight: '',
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
    this.setState({'product': value});
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
    newState.form = this.vForm.checkForm();

    if (fieldName === 'ammount') {
      newState.form[fieldName + 'Value'] = value;
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
            <Selector data={this.props.formData} label="Wybierz produkt:" fieldName="product" onChange={this.changeProduct}/>
            <SubmitButton form={this.state.form} submit={this.validateForm}/>
          </tbody>
        </table>
      </form>
    );}
};
