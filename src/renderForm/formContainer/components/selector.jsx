import React from 'react';

function createOptions(data) {
  return data.map((option) => {
    return <option value={option.id} key={option.id}>{option.label}</option>
  });
}

export const Selector = (props) => {
  const forProp = "qb_wp_lists_contact-" + props.fieldName;
  const nameProp = "qb_wp_lists_contact[" + props.fieldName + "]";
  const idProp = "qb_wp_lists_contact-" + props.fieldName;
  const options = createOptions(props.data);

  function onChange(ev) {
    const newValue = ev.target.value;
    const isRequired = !(newValue === props.data[0].id);
    
    props.onChange(props.fieldName, newValue, props.elements, isRequired);
  }

  return (
    <tr className="qbf-field qbf-field-select">
      <td className="qbf-field-label"><span><label htmlFor={forProp}>{props.label}</label></span></td>
      <td className="qbf-field-field">
        <select name={nameProp} className="qbf-select" id={idProp} onChange={onChange}>
          {options}
        </select>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
