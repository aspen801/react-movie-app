import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthType, setAuthModalOpen } from "../../../store/slices/authModalSlice";
import { setUser } from "../../../store/slices/userSlice";
import RippleButton from "../../UI/RippleButton/RippleButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, FormLabel, FormErrorMessage, Input, Alert, AlertIcon } from "@chakra-ui/react";
import { logIn } from "../../../firebase/auth";
import { auth } from "../../../firebase/index";

import "./loginform.scss";

const validationSchema = yup.object({
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
});

const LoginForm = (authModalOpen) => {
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await logIn(values.email, values.password);
        const user = auth.currentUser;
        const reduxObject = {
          accessToken: user.accessToken,
          displayName: user.displayName,
        };
        dispatch(setUser(reduxObject));
        dispatch(setAuthModalOpen(false));
        setFormError("");
      } catch (error) {
        setFormError(error.code);
        console.log(formError);
      }
    },
  });

  useEffect(() => {
    formik.resetForm();
    setFormError("");
  }, [authModalOpen]);

  const handleAuthTypeChange = () => {
    dispatch(setAuthType("signup"));
  };

  return (
    <div>
      <div className="login-form__main-wrapper">
        <form onSubmit={formik.handleSubmit}>
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
          {/* <div className="password-recovery"></div>
          <div className="alternatives-container"></div> */}
          <div className="login-form__buttons">
            <RippleButton submit buttonType="primary" width={"100%"}>
              Log In
            </RippleButton>
            <RippleButton buttonType="secondary" width={"100%"} onClick={handleAuthTypeChange}>
              Sign Up
            </RippleButton>
          </div>
        </form>
        {formError && (
          <div className="login-form__error-alert">
            <Alert status="error" variant="solid">
              <AlertIcon />
              {formError === "auth/invalid-login-credentials" && "Error! Invalid login credentials."}
              {formError === "auth/too-many-requests" && "Error! Too many requests, try again later."}
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
