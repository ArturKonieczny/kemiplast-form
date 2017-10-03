import React from 'react';
import { labels } from '../formSettings/labels';

export const Selector = (props) => {
  const forProp = "qb_wp_lists_contact-" + props.fieldName;
  const nameProp = "qb_wp_lists_contact[" + props.fieldName + "]";
  const idProp = "qb_wp_lists_contact-" + props.fieldName;
  const options = props.data.map((option) => {
    return <option value={option.id} key={option.id}>{option.label}</option>
  });

  function onChange(ev) {
    props.onChange(ev.target.value);
  }

  return (
    <tr className="qbf-field qbf-field-select">
      <td className="qbf-field-label"><span><label htmlFor={forProp}>{labels[props.fieldName]}</label></span></td>
      <td className="qbf-field-field">
        <select name={nameProp} className="qbf-select" id={idProp} onChange={onChange}>
          {options}
        </select>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
