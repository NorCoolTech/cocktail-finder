import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewsletterPage";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      name: "",
      lastName: "",
      email: "",
    });
    toast.success("added successfully to newsletter");
  };

  return (
    <Wrapper>
      <div>
        <h5>Our Newsletter</h5>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label form-row">Name</label>
          <input
            className="form-input form-row"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="form-label form-row">Last Name</label>
          <input
            className="form-input form-row"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <label className="form-label">Email</label>
          <input
            className="form-input form-row"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
