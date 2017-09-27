import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './formContainer/formcontainer.jsx';

export default function renderForm(formData, formContainer) {
  ReactDOM.render(<FormContainer formData = {formData} />, formContainer);
}
