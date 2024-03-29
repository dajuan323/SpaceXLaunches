import React from "react";
import { Table } from "react-bootstrap";

function LaunchTable() {
  return (
    <Table hover responsive className="mb-0">
      <tbody>
        <tr>
          <td>
            <h5 className="font-14 my-1 fw-normal">Marco Lightweight Shirt</h5>
            <span className="text-muted font-13">25 March 2018</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$128.50</h5>
            <span className="text-muted font-13">Price</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">37</h5>
            <span className="text-muted font-13">Quantity</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
            <span className="text-muted font-13">Amount</span>
          </td>
        </tr>
        <tr>
          <td>
            <h5 className="font-14 my-1 fw-normal">Half Sleeve Shirt</h5>
            <span className="text-muted font-13">17 March 2018</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$39.99</h5>
            <span className="text-muted font-13">Price</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">64</h5>
            <span className="text-muted font-13">Quantity</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
            <span className="text-muted font-13">Amount</span>
          </td>
        </tr>
        <tr>
          <td>
            <h5 className="font-14 my-1 fw-normal">Lightweight Jacket</h5>
            <span className="text-muted font-13">12 March 2018</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$20.00</h5>
            <span className="text-muted font-13">Price</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">184</h5>
            <span className="text-muted font-13">Quantity</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
            <span className="text-muted font-13">Amount</span>
          </td>
        </tr>
        <tr>
          <td>
            <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
            <span className="text-muted font-13">05 March 2018</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$28.49</h5>
            <span className="text-muted font-13">Price</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">69</h5>
            <span className="text-muted font-13">Quantity</span>
          </td>
          <td>
            <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
            <span className="text-muted font-13">Amount</span>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default LaunchTable;
