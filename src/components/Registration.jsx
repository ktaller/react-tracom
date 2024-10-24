import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = ({ setIsRegistered }) => {
  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: ""
  });
  const [erra, setErra] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = registrationDetails;

    // Password validation
    if (password.length < 8) {
      setErra({ ...erra, password: "Password must be at least 8 characters." });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErra({ ...erra, password: "Password must contain at least one uppercase letter." });
      return;
    } else if (!/\d/.test(password)) {
      setErra({ ...erra, password: "Password must contain at least one digit." });
      return;
    } else {
      setErra({ ...erra, password: "" }); // Clear password error if valid
    }

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
    setIsRegistered(true);

    // Reset form fields
    setRegistrationDetails({
      username: "",
      password: ""
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="registration-container border rounded p-4 shadow bg-white" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              value={registrationDetails.username}
              onChange={(e) => setRegistrationDetails({ ...registrationDetails, username: e.target.value })}
              required
              className="form-control"
            />
            {erra.username && <p className="text-danger mt-2">{erra.username}</p>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              value={registrationDetails.password}
              onChange={(e) => setRegistrationDetails({ ...registrationDetails, password: e.target.value })}
              required
              className="form-control"
            />
            {erra.password && <p className="text-danger mt-2">{erra.password}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>
          <p className="text-center">
            Already have an account? <Link to="/login" className="text-decoration-none">Click here</Link> to log in.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
