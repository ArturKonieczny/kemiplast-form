import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './formContainer/formcontainer.jsx';

export default function renderForm(formData, deliveryOptions, transferDetails , formContainer) {
  ReactDOM.render(<FormContainer formData = {formData} deliveryOptions = {deliveryOptions} transferDetails = {transferDetails}/>, formContainer);
}
