import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewsletterPage";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("formData", JSON.stringify(values));
      formik.resetForm();
      toast.success("Added successfully to newsletter");
    },
  });

  return (
    <Wrapper>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h4>Our Newsletter</h4>
        <label className="form-label form-row">Name</label>
        <input
          className="form-input form-row"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label className="form-label form-row">Last Name</label>
        <input
          className="form-input form-row"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="error">{formik.errors.lastName}</div>
        )}

        <label className="form-label">Email</label>
        <input
          className="form-input form-row"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};


export default Newsletter;
