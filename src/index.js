import './style.scss';
import { getFormData } from './utils';

function init() {
  const formContainer = document.querySelector('#order-form-container');

  if (formContainer) {
    const formData = getFormData();

    console.log(formData);
  }
}

document.addEventListener('DOMContentLoaded', init);
