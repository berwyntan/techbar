import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAppContext } from "../context/UseAppContext";
import { toast } from "react-toastify";

function Checkout({ user }) {
  const navigate = useNavigate();
  const { cartItems, cleancart } = useAppContext(); // getting cart items and clean cart function from app context
  const [total, setTotal] = useState(0);

  // checkout fields
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [cardno, setCardno] = useState("");
  const [expmonth, setExpmonth] = useState("");
  const [expyear, setExpyear] = useState("");
  const [cvv, setCvv] = useState("");

  const [btnloading, setBtnloading] = useState(false);

  // update total function
  const updatetotal = () => {
    var t = cartItems.reduce(
      (total, item) => total + +item.price * +item.quantity,
      0
    );

    setTotal(t);
  };

  // first run
  useEffect(() => {
    updatetotal();
  }, [cartItems]);

  // form submit
  const submit = async () => {
    if (
      phone !== "" &&
      address !== "" &&
      zip !== "" &&
      city !== "" &&
      country !== "" &&
      state !== "" &&
      cardno !== "" &&
      expmonth !== "" &&
      expyear !== "" &&
      cvv !== ""
    ) {
      setBtnloading(true);

      try {
        // api call to create order
        const { data } = await axios.post("/api/neworder", {
          orderItems: cartItems,
          shippingInfo: {
            address: address,
            city: city,
            state: state,
            country: country,
            pinCode: zip,
            phoneNo: phone,
          },
        });

        if (data.success) {
          toast.success("Order Created Successfully");
          cleancart();
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
        toast.error(err.response.data.message);
        setBtnloading(false);
        return err.response.data;
      }
    } else {
      toast.error("Please Fill Complete Form");
    }
  };

  //! rendering our ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">Checkout</h2>
      <br />
      <br />
      <Container>
        <div className="checkoutrow">
          <div className="checkoutcol-75">
            <div className="checkoutcontainer">
              <div>
                <div className="checkoutrow">
                  <div className="checkoutcol-50">
                    <br />
                    <h3>Billing Address</h3>
                    <br />
                    <label className="checkoutlabel" htmlFor="fname">
                      <i className="fa fa-phone" /> Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phonenumber"
                      placeholder="00-000-000-000"
                      className="checkoutinput"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <label className="checkoutlabel" htmlFor="adr">
                      <i className="fa fa-address-card-o" /> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                      className="checkoutinput"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <div className="checkoutrow">
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="city">
                          <i className="fa fa-institution" /> City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="New York"
                          className="checkoutinput"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="city">
                          <i className="fa fa-globe" /> Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          placeholder="United States"
                          className="checkoutinput"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkoutrow">
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="state">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NY"
                          className="checkoutinput"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="zip">
                          Zip
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder={10001}
                          className="checkoutinput"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkoutcol-50">
                    <br />
                    <h3>Payment</h3>
                    <br />
                    <label className="checkoutlabel" htmlFor="fname">
                      Accepted Cards
                    </label>
                    <div className="icon-container">
                      <i
                        className="fa fa-cc-visa"
                        style={{ checkoutcolor: "navy" }}
                      />
                      <i
                        className="fa fa-cc-amex"
                        style={{ checkoutcolor: "blue" }}
                      />
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ checkoutcolor: "red" }}
                      />
                      <i
                        className="fa fa-cc-discover"
                        style={{ checkoutcolor: "orange" }}
                      />
                    </div>

                    <label className="checkoutlabel" htmlFor="ccnum">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                      className="checkoutinput"
                      value={cardno}
                      onChange={(e) => setCardno(e.target.value)}
                    />
                    <label className="checkoutlabel" htmlFor="expmonth">
                      Exp Month
                    </label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                      className="checkoutinput"
                      value={expmonth}
                      onChange={(e) => setExpmonth(e.target.value)}
                    />
                    <div className="checkoutrow">
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="expyear">
                          Exp Year
                        </label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder={2018}
                          className="checkoutinput"
                          value={expyear}
                          onChange={(e) => setExpyear(e.target.value)}
                        />
                      </div>
                      <div className="checkoutcol-50">
                        <label className="checkoutlabel" htmlFor="cvv">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder={352}
                          className="checkoutinput"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <input
                      style={{ width: "96%" }}
                      type="submit"
                      defaultValue="Continue to checkout"
                      className="checkoutbtn"
                      onClick={submit}
                      disabled={btnloading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkoutcol-25">
            <div className="checkoutcontainer">
              <br />
              <h4>
                Cart
                <span
                  className="checkoutspan"
                  style={{ checkoutcolor: "black" }}
                >
                  <i className="fa fa-shopping-cart" />
                  <b>{cartItems.length}</b>
                </span>
              </h4>
              <br />
              {cartItems.map((v, i) => {
                return (
                  <p key={i}>
                    <Link to={"/product/" + v._id}>{v.name}</Link>{" "}
                    <span className="checkoutspan">
                      ${v.price * v.quantity}
                    </span>
                  </p>
                );
              })}
              <hr />
              <p>
                Total{" "}
                <span
                  className="checkoutspan"
                  style={{ checkoutcolor: "black" }}
                >
                  <b>${total}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
