import React from 'react';
import ReactDOM from 'react-dom';
import FormValidator from 'formvalidator';
import {formSettings} from './formSettings/formSettings';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.vForm = new FormValidator(formSettings);
    this.state = {
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
  }

  validateField(fieldName, value) {
    const field = this.vForm.form[fieldName];

    field.set('fieldValue', value);

    const newState = {};

    newState[fieldName] = field.get('valid');
    newState.form = this.vForm.checkForm();
    this.setState(newState);
  }

  render() {
    return (
      <div>
        hai
      </div>);
  }
};
