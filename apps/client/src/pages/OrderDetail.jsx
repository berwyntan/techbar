import React from "react";
import Header from "../components/Header";
import { Container, Table } from "react-bootstrap";

const OrderDetail = ({ user }) => {
  //rendering our ui
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center"> Order Detail</h2>
      <br />
      <br />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
        </Table>
        <div className="productlist"></div>
      </Container>
    </>
  );
};

export default OrderDetail;
