import './style.scss';
import { getFormData } from './utils';
import renderForm from './renderform/renderform.jsx';

function init() {
  const formContainer = document.querySelector('#order-form-container');

  if (formContainer) {
    const formData = getFormData();

    renderForm(formData, formContainer);
  }
}

document.addEventListener('DOMContentLoaded', init);
