import React from 'react';
import { labels } from '../formSettings/labels';

export const Input = (props) => {
  const isValid = (props.valid) ? '' : "invalid";
  const isHidden = (props.hidden) ? "hidden" : '';
  const forProp = "qb_wp_lists_contact-" + props.fieldName;
  const nameProp = "qb_wp_lists_contact[" + props.fieldName + "]";
  const classProp = "qbf-" + props.type + " " + isValid + " " + isHidden;
  const idProp = "qb_wp_lists_contact-" + props.fieldName;

  function onChange(ev) {
    props.onChange(props.fieldName, ev.target.value);
  }

  return (
    <tr className="qbf-field qbf-field-select">
      <td className="qbf-field-label"><span><label htmlFor={forProp}>{labels[props.fieldName]}</label></span></td>
      <td className="qbf-field-field">
        <input name={nameProp} type={props.type} className={classProp} id={idProp} onChange={onChange}>
        </input>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
