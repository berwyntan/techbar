import React, { useState } from "react"; // react with state to hold email and password
import { useAppContext } from "../context/UseAppContext"; // getting app context
import { useNavigate } from "react-router-dom"; // navigate method to redirect after login
import { Link } from "react-router-dom"; // link to redirect to other page
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import { toast } from "react-toastify";


const SignUp = () => {
  const { createAccount } = useAppContext(); // getting create account function from app context
  const navigate = useNavigate(); // navigate method to navigate to other page

  const [name, setName] = useState(""); // state for name
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password
 
  
  // sign up function
  const signupnow = async (e) => {
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
    } else if (!isLength(password, {min:6})) {
      toast.error("Password should have 6 or more alphanumeric characters")
      return
    } else if (!isAlphanumeric(password)) {
      toast.error("Password should contain only letters and numbers")
      return
    }


    // making function call
    const result = await createAccount(name, email, password);

    // if request is successful -> navigate to home page
    if (result.success === true) {
      navigate("/signin"); //to home page
    }
  };

  
  //rendering our ui
  return (
    <>
      <div className="loginbody">
        <div className="login-page">
          <div className="loginform">
            <h3>Create Account</h3>
            <br />
            <form className="register-form">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                autoComplete="false"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={signupnow} style={{ marginBottom: "15px"}}>Create Account</button>              
            </form>
            <br />
            
            <p className="message" style={{ marginTop: "15rem" }}>
              Already registered? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
