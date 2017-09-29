import React from 'react';

export const SubmitButton = (props) => {
  const disabled = !props.form;
  function submitFunction(event) {
    event.preventDefault();

    if (props.submit()) {
      event.target.form.submit();
    }
  }

  return (
    <tr className="qbf-field qbf-field-submit">
      <td className="placeholder"></td>
      <td className="qbf-field-field" colSpan="2">
        <input name="qb_wp_lists_contact[submit]" onClick={submitFunction} className="qbf-submit" id="qb_wp_lists_contact-submit" value="Zamów" type="submit"  disabled={disabled}/>
      </td>
    </tr>
  );
}
