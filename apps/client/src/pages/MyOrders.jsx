import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/UseAppContext";

const MyOrders = ({ user }) => {
  const [orders, setOrders] = useState([]); // order state

  const { logOut } = useAppContext(); // get logout method from app context

  const navigate = useNavigate();

  const getData = async () => {
    try {
      //! get orders from backend api
      const { data } = await axios.get(`/api/order/${user._id}`);
      // console.log(data);
      //set orders in orders state
      setOrders(data.order);
    } catch (e) {
      console.log(e);
      toast.error("Error! Please Try Again Later");
    }
  };

  //! go to order detail with order id
  const gotodetail = (id) => {
    navigate(`/orderdetails/${id}`);
  };

  //! logout button
  const signout = async () => {
    await logOut();
    navigate("/");
  };

  //! first run
  useEffect(() => {
    getData();
  }, [user]);

  //rendering our ui
  return (
    <>
      <Header user={user} />
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
        <Table bordered responsive striped>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Price</th>
              <th>No Of Items</th>
              <th>Order Detail</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((v, i) => {

              const totalPriceArray = v.orderItems.map(item => {
                return parseInt(item.quantity) * parseInt(item.price)
              })              

              const totalPrice = totalPriceArray.reduce((prev, curr) => prev + curr, 0)
              
              return (
                <tr key={i}>
                  <td>{v._id}</td>
                  {/* <td>${v.totalPrice}</td> */}
                  <td>${totalPrice}</td>
                  <td>{v.orderItems.length}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => gotodetail(v._id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default MyOrders;
