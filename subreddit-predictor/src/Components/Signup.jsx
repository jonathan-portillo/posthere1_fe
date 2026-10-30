import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import AuthPanel from "./AuthPanel";

const Signup = (props) => {
  const [signUpState, setSignUpState] = useState({
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
      .min(4, "Username must have at least 4 characters")
      .required("Username is required"),
    /*email: yup
      .string()
      .email("An email is required")
      .required("Email is required"),*/
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters")
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

  const inputChange = (e) => {
    e.persist();
    const newAcctData = {
      ...signUpState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setSignUpState(newAcctData);
  };

  useEffect(() => {
    formSchema.isValid(signUpState).then((isValid) => {
      setDisableButton(!isValid);
    });
  }, [signUpState]);

  return (
    <div className="auth-split">
      <AuthPanel variant="signup" />
      <div className="auth-card">
        <Logo className="logo" />
        <h1>Create your account</h1>
        <p className="subtitle">Start finding the right subreddit for your posts.</p>
        <form className="auth-form">
          <TextField
            id="username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            fullWidth
            value={signUpState.username}
            onChange={inputChange}
            error={errors.username.length > 0}
            helperText={errors.username}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            fullWidth
            value={signUpState.password}
            onChange={inputChange}
            error={errors.password.length > 0}
            helperText={errors.password}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={disableButton}
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              await props.signUp(signUpState);
              navigate("/dashboard");
            }}
          >
            Create Account
          </Button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { signUp })(Signup);
