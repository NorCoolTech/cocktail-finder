import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewsletterPage";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const isDuplicateForm = (values) => {
  const savedFormData = JSON.parse(localStorage.getItem("formData"));
  if (savedFormData) {
    return (
      values.name === savedFormData.name &&
      values.lastName === savedFormData.lastName &&
      values.email === savedFormData.email
    );
  }
  return false;
};

const Newsletter = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (isDuplicateForm(values)) {
        toast.warning(
          "The exact same values are already saved for the newsletter"
        );
      } else {
        localStorage.setItem("formData", JSON.stringify(values));
        formik.resetForm();
        toast.success("Added successfully to the newsletter");
        setTimeout(() => {
          navigate("/"); 
        }, 2500); 
      }
    },
  });

  return (
    <Wrapper>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h4>Our Newsletter</h4>
        {formik.errors.name && formik.touched.name ? (
          <label className="form-label form-row error" htmlFor="name">
            {formik.errors.name}
          </label>
        ) : (
          <label className="form-label form-row" htmlFor="name">
            Name
          </label>
        )}
        <input
          className="form-input form-row"
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        {formik.errors.lastName && formik.touched.lastName ? (
          <label className="form-label form-row error" htmlFor="lastName">
            {formik.errors.lastName}
          </label>
        ) : (
          <label className="form-label form-row" htmlFor="lastName">
            Last Name
          </label>
        )}
        <input
          className="form-input form-row"
          type="text"
          name="lastName"
          id="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />

        {formik.errors.email && formik.touched.email ? (
          <label className="form-label form-row error" htmlFor="email">
            {formik.errors.email}
          </label>
        ) : (
          <label className="form-label form-row" htmlFor="email">
            Last Name
          </label>
        )}
        <input
          className="form-input form-row"
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Newsletter;
