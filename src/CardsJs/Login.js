import React from "react";
import Header from "./CardsHtml/Header";
import Footer from "./CardsHtml/Footer";
import "../CardsScc/Login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Store/reposReducer";
import { setPasswordState } from "../Store/reposReducer";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.repos.login);
  const passwordState = useSelector((state) => state.repos.password);

  function loginFunc() {
    dispatch(setLogin(email));
    setToLocalStorage("login", email);
    dispatch(setPasswordState(password));
    setToLocalStorage("password", password);
  }

  console.log(loginState);
  console.log(passwordState);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(
        "Password must be more than 3 characters and less than 8"
      );
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <>
      <div className="ShopHeader">
        <Header />
      </div>

      <section>
        <h3 className="loginTitle">My Account</h3>
        <div className="MainBlocks">
          <div>
            <div className="loginMainBlock">
              <div className="login">LOGIN</div>
              <div className="loginText">
                If you have an account with us, please log in.
              </div>
              <div>
                {emailDirty && emailError && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {emailError}
                  </div>
                )}
                <input
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  className="loginInp"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                {passwordDirty && passwordError && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    {passwordError}
                  </div>
                )}
                <input
                  onChange={(e) => passwordHandler(e)}
                  value={password}
                  onBlur={(e) => blurHandler(e)}
                  name="password"
                  className="loginInp"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="loginBtn">
                <Link to="/">
                  <button onClick={() => loginFunc()} disabled={!formValid}>
                    SIGN IN
                  </button>
                </Link>
              </div>
              <div className="forgotPass">
                <span className="forgotBtn">Forgot your password?</span>
              </div>
            </div>
          </div>
          <div>
            <div className="regMainBlock">
              <div className="regTitle">NEW CUSTOMER?</div>
              <div className="regText">
                Registering for this site allows you to access your order status
                and history. We’ll get a new account set up for you in no time.
                For this will only ask you for information necessary to make the
                purchase process faster and easier
              </div>
              <div className="regBtn">CREATE AN ACCOUNT</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
