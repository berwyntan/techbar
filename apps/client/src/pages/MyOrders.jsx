import React from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyOrders = ({ user }) => {
  //rendering our ui
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center"> My Orders</h2>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-sm btn-danger" onClick={signout}>
          Logout
        </button>
      </div>
      <br />
      <br />
      <Container>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Price</th>
              <th>No Of Items</th>
              <th>Order Detail</th>
            </tr>
          </thead>
        </Table>
        <br />
      </Container>
      <br />
    </>
  );
};
export default MyOrders;
