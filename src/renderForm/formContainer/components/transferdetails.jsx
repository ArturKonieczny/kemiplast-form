import React from 'react';

export const TransferDetails = (props) => {
  const classes = `qbf-field ${(props.hidden) ? 'hidden' : ''}`;
  return (
    <tr className={classes}>
      <td className="qbf-field-label"><span><label>{props.label}</label></span></td>
      <td className="qbf-field-label">
        <p>{props.value.name}</p>
        <p>{props.value.address}</p>
        <p>{props.value.account}</p>
      </td>
      <td className="qbf-field-error"><span></span></td>
    </tr>
  );
}
