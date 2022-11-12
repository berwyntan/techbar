import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container, Table } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom"; // useParam to get Order ID from url and useNaviagate to redirect between pages
import axios from "axios"; // axios for api calls
import { toast } from "react-toastify";

const OrderDetail = ({ user }) => {
  // get order id

  let { orderid } = useParams(); // get order id

  const navigate = useNavigate();
  const [order, setOrder] = useState({}); // order object
  const [loading, setLoading] = useState(true); // loading
  const [isCancelling, setIsCancelling] = useState(false); // to confirm cancel order

  //! get order by api
  const getData = async (id) => {
    try {
      const { data } = await axios.get(`/api/order/id/${id}`);
      if (data.success === true) {
        // set order in state
        setOrder(data.order);
        console.log(data.order)
        setLoading(false);
      } else {
        navigate("/myorders");
      }
    } catch (e) {
      console.log(e);
      navigate("/myorders");
    }
  };

  // cancel order by API
  const cancelOrder = async (id) => {
    try {
      const { data } = await axios.delete(`/api/order/${id}`);
      if (data.success === true) {
        // set order in state
        // setOrder(data.order);
        console.log(data.order);
        toast.success(`Order ${id} successfully cancelled`);
        navigate("/myorders");
        setLoading(false);
      } else {
        toast.error(`Order ${id} could not be cancelled`);
        // navigate("/myorders");
      }
    } catch (e) {
      console.log(e);
      navigate("/myorders");
    }
  }

  // set cancel order state
  const handleCancel = () => {
    setIsCancelling(true);
  }

  // confirm order
  const handleConfirmCancel = (id) => {
    cancelOrder(id);
  }

  //! first run
  useEffect(() => {
    getData(orderid);
  }, [orderid]);

  // !rendering our ui
  if (loading) {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <>
        <Header user={user} />
        <br />
        <h2 className="text-center"> Order Detail: {orderid}</h2>
        <br />
        <br />
        <Container>
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((v, i) => {

                return (
                  <tr key={i}>
                    <td><Link to={`/product/${v.product._id}`}>{v.product.name}</Link></td>
                    <td>${v.price}</td>
                    <td>{v.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {isCancelling || <button onClick={handleCancel}>Cancel Order</button>}
          {isCancelling && <p>Do you want to cancel the order?</p>}
          {isCancelling && <button onClick={() => handleConfirmCancel(orderid)}>Confirm Cancel Order</button>}
        </Container>
      </>
    );
  }
};

export default OrderDetail;
