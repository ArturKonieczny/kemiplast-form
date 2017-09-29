import React from 'react';

function createOption(productName, data) {
  const product = data[productName];

  return <option value={product.id} key={product.id}>{product.label}</option>;
}

export const Selector = (props) => {
  const options = [];
  for (const productName in props.data) {
    if (productName !== 'chosenProduct') {
      options.push(createOption(productName, props.data));
    }
  }

  return (
    <tr className="qbf-field qbf-field-select">
      <td className="qbf-field-label"><span><label htmlFor="qb_wp_lists_contact-{props.fieldName}">{props.label}</label></span></td>
      <td className="qbf-field-field">
        <select name="qb_wp_lists_contact[{props.fieldName}]" className="qbf-select" id="qb_wp_lists_contact-{props.fieldName}" defaultValue={props.data.chosenProduct} onChange={props.onChange}>
          {options}
        </select>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
