import React from 'react';
import { labels } from '../formSettings/labels';

function createOption(productName, data) {
  const product = data[productName];

  return <option value={product.id} key={product.id}>{product.label}</option>;
}

export const ProductSelector = (props) => {
  const forProp = "qb_wp_lists_contact-" + props.fieldName;
  const nameProp = "qb_wp_lists_contact[" + props.fieldName + "]";
  const idProp = "qb_wp_lists_contact-" + props.fieldName;
  const options = [];
  for (const productName in props.data) {
    if (productName !== 'chosenProduct') {
      options.push(createOption(productName, props.data));
    }
  }

  function onChange(ev) {
    props.onChange(ev.target.value);
  }

  return (
    <tr className="qbf-field qbf-field-select">
      <td className="qbf-field-label"><span><label htmlFor={forProp}>{labels[props.fieldName]}</label></span></td>
      <td className="qbf-field-field">
        <select name={nameProp} className="qbf-select" id={idProp} defaultValue={props.data.chosenProduct} onChange={onChange}>
          {options}
        </select>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
