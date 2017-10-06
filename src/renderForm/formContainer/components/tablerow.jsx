import React from 'react';

export const TableRow = (props) => {
  const newValue = String(props.value);

  function expandToTwo(value) {
    const valueArray = value.split('.');

    if (!valueArray[1]) {
      return valueArray[0] + ',00';
    }

    if (valueArray[1].length === 1) {
      return valueArray.join(',') + '0';
    }

    return valueArray.join(',');
  }

  return (
    <tr className="qbf-field">
      <td className="qbf-field-label"><span><label>{props.label}</label></span></td>
      <td className="qbf-field-label">
        <span>{expandToTwo(newValue) + ' zł'}</span>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
