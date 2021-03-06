import React from 'react';

export const Input = (props) => {
  const isValid = (props.valid) ? '' : "invalid";
  const isHidden = (props.isHidden) ? "hidden" : '';
  const forProp = "qb_wp_lists_contact-" + props.fieldName;
  const nameProp = "qb_wp_lists_contact[" + props.fieldName + "]";
  const trClassProp = "qbf-field qbf-field-select" + " " + isHidden;
  const classProp = "qbf-" + props.type + " " + isValid;
  const idProp = "qb_wp_lists_contact-" + props.fieldName;

  function onChange(ev) {
    props.onChange(props.fieldName, ev.target.value);
  }

  function getField(type) {
    if (type === 'textarea') {
      return (<textarea name={nameProp} className={classProp} id={idProp} onChange={onChange}>
      </textarea>);
    }

    return (<input name={nameProp} type={props.type} className={classProp} id={idProp} onChange={onChange}>
    </input>);
  }

  return (
    <tr className={trClassProp}>
      <td className="qbf-field-label"><span><label htmlFor={forProp}>{props.label}</label></span></td>
      <td className="qbf-field-field">
        {getField(props.type)}
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
