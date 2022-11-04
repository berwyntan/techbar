import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/UseAppContext";
import { toast } from "react-toastify";
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

const MyOrders = ({ user }) => {
  const [orders, setOrders] = useState([]); // order state

  const { logOut, setUser } = useAppContext(); // get logout method from app context

  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [confirmUpdate, setConfirmUpdate] = useState(false);

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
   
    // validation
    if (!isLength(name, {min:4})) {
      toast.error("Name should have more than 4 characters")
      return
    } else if (!isLength(name, {max:30})) {
      toast.error("Name Cannot Exceed 30 Characters")
      return
    } else if (!isEmail(email)) {
      toast.error("Email address is not valid")
      return
    } else if (name === user.name && email === user.email){
      toast.error("No changes to user profile")
      return
    }

    setConfirmUpdate(true);
  };
  const handleConfirmUpdate = (e) => {
    e.preventDefault();
    updateUserProfile();
    setConfirmUpdate(false);
  };

  const updateUserProfile = async () => {
    
    try {
      const { data } = await axios.put("/api/user/updateProfile", {
        name: name,
        email: email,
        password: password,
        _id: user._id
      });
      setUser(data.user);
      toast.success(`Account ${data.user.email} successfully updated`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setName(user.name);
      setEmail(user.email);
    }
  }

  const getData = async () => {
    try {
      //! get orders from backend api
      const { data } = await axios.get(`/api/order/${user._id}`);
      console.log(data);
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
      {/* <h2 className="text-center"> My Orders</h2> */}
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
      {/* MY PROFILE UPDATE FORM - START */}
      <br />
      <h2 className="text-center">My Profile</h2>

      <br />

      <form className="update-form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="Update Name" value={name} 
          onChange={handleName} disabled={confirmUpdate}/>
        </div>
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="Update Email Address" value={email} 
          onChange={handleEmail} disabled={confirmUpdate}/>
        </div>
        <br />
        {confirmUpdate && <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="password" placeholder="Password" 
            onChange={handlePassword} autoComplete="false"/>
        </div>
        }
        {confirmUpdate && <p style={{textAlign: 'center', marginTop: '10'}}>Please enter your password to update profile</p>}
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {confirmUpdate || <button className="btn btn-sm btn-danger" onClick={handleUpdate}>Update My Profile</button>}
          {confirmUpdate && <button className="btn btn-sm btn-danger" onClick={handleConfirmUpdate}>Update</button>}
        </div>
        <br />
      </form>
      {/* MY PROFILE UPDATE FORM  - END */}

      <Container>
        <h2 className="text-center"> My Orders</h2>
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
              const totalPriceArray = v.orderItems.map((item) => {
                return parseInt(item.quantity) * parseInt(item.price);
              });

              const totalPrice = totalPriceArray.reduce(
                (prev, curr) => prev + curr,
                0
              );

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
