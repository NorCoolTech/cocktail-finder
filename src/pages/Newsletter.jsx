import React from 'react'

const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/*name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" name="name" id="name" />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
        />
      </div>
      {/*email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" className="form-input" name="email" id="email" />
      </div>
      <button type='submit' className='btn btn-block' style={{marginTop:'0.5rem'}}>submit</button>
    </form>
  );
}

export default Newsletter