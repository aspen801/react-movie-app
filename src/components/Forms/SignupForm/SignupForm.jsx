import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthType, setAuthModalOpen } from "../../../store/slices/authModalSlice";
import RippleButton from "../../UI/RippleButton/RippleButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { signUp } from "../../../firebase/auth";

import "./signupform.scss";

const validationSchema = yup.object({
  login: yup
    .string("Enter your login")
    .matches(/^[a-zA-Z0-9_-]{3,15}$/, "Enter a valid login (3-15 characters, allowed: letters, numbers, _, -)")
    .required("Login is required"),
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
});

const SignupForm = (authModalOpen) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      signUp(values.login, values.email, values.password);
      console.log(JSON.stringify(values, null, 2));
      dispatch(setAuthModalOpen(false));
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, [authModalOpen]);

  const handleAuthTypeChange = () => {
    dispatch(setAuthType("login"));
  };

  return (
    <div>
      <div className="signup-form__main-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="login" isInvalid={formik.touched.login && formik.errors.login}>
            <FormLabel>Login</FormLabel>
            <Input variant="flushed" size="lg" name="login" value={formik.values.login} onChange={formik.handleChange} placeholder="Enter your login" />
            <FormErrorMessage>{formik.errors.login}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel>Email</FormLabel>
            <Input variant="flushed" size="lg" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter your email" />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl id="password" isInvalid={formik.touched.password && formik.errors.password}>
            <FormLabel>Password</FormLabel>
            <Input variant="flushed" size="lg" name="password" type="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter your password" />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <div className="password-recovery"></div>
          <div className="alternatives-container"></div>
          <div className="signup-form__buttons">
            <RippleButton submit buttonType="primary" width={"100%"}>
              Sign Up
            </RippleButton>
            <RippleButton buttonType="secondary" width={"100%"} onClick={handleAuthTypeChange}>
              Log In
            </RippleButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
