import React from "react";

function LaunchTableRow(props) {
  return (
    <tr>
      <td>
        <h5 className="font-14 my-1 fw-normal">ASOS Ridley High Waist</h5>
        <span className="text-muted font-13">07 April 2018</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">$79.49</h5>
        <span className="text-muted font-13">Price</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">82</h5>
        <span className="text-muted font-13">Quantity</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
        <span className="text-muted font-13">Amount</span>
      </td>
    </tr>
  );
}

export default LaunchTableRow;
