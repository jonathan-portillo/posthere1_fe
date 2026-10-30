import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { login, fetchPrev } from "../actions/";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import AuthPanel from "./AuthPanel";

const Login = (props) => {

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [disableButton, setDisableButton] = useState(true);

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Must enter proper username")
      .required("Username is required"),
    password: yup
      .string()
      .min(8, "Proper password is required")
      .required("Password is required"),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        });
      });
  };

  const loginInfo = (e) => {
    e.persist();
    const loginData = {
      ...loginState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setLoginState(loginData);
  };

  useEffect(() => {
    formSchema.isValid(loginState).then((isValid) => {
      setDisableButton(!isValid);
    });
  }, [loginState]);

  return (
    <div className="auth-split">
      <AuthPanel variant="login" />
      <div className="auth-card">
        <Logo className="logo" />
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to your Post Match account.</p>
        <form className="auth-form">
          <TextField
            id="username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            fullWidth
            value={loginState.username}
            onChange={loginInfo}
            error={errors.username.length > 0}
            helperText={errors.username}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            fullWidth
            value={loginState.password}
            onChange={loginInfo}
            error={errors.password.length > 0}
            helperText={errors.password}
          />
        {props.error && (
          <div className="auth-alert">
            We couldn't sign you in. Check your details and try again.
          </div>
        )}
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={disableButton}
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              await props.login(loginState);
              navigate("/dashboard");
            }}
          >
            Sign In
          </Button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { login, fetchPrev })(Login);
