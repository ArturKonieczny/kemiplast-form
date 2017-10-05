import React from 'react';

export const TableRow = (props) => {

  return (
    <tr className="qbf-field">
      <td className="qbf-field-label"><span><label>{props.label}</label></span></td>
      <td className="qbf-field-label">
        <span>{props.value}</span>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
