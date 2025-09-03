import { useState } from "react";
import Input from "./Input.jsx";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
export default function StateLoginCopy() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [formInput, setFormInput] = useState({
    email: undefined || "",
    password: undefined || "",
  });

  const [blurInput, setBlurInput] = useState({
    email: false,
    password: false,
  });

  const emailInvalid =
    blurInput.email &&
    !isEmail(formInput.email) &&
    !isNotEmpty(formInput.email);
  const passwordInvalid =
    blurInput.password &&
    hasMinLength(formInput.password, 4) &&
    !isNotEmpty(formInput.password);

  const handleChange = (identifier, event) => {
    setFormInput((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    setBlurInput((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted " + formInput.email + " " + formInput.password);
  };
  const handleBlur = (identifier) => {
    setBlurInput((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          {/* <label htmlFor="email">Email</label> */}
          {/* <input
            onChange={(e) => handleChange("email", e)}
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlur("email")}
            value={formInput.email}
          /> */}
          <Input
            onChange={(e) => handleChange("email", e)}
            onBlur={() => handleBlur("email")}
            type="email"
            name="Email"
            id="email"
            value={formInput.email}
          >
            {emailInvalid && <p>Please valid email address</p>}
          </Input>

          <Input
            onChange={(e) => handleChange("email", e)}
            onBlur={() => handleBlur("email")}
            type="email"
            name="Email"
            id="email"
            value={formInput.email}
          >
            {emailInvalid && <p>Please valid email address</p>}
          </Input>
        </div>

        <div className="control no-margin">
          {/* <label htmlFor="password">Password</label>
          <input
            onChange={(e) => handleChange("password", e)}
            onBlur={() => handleBlur("password")}
            id="password"
            type="password"
            name="password"
            value={formInput.password}
          />
          <div className="control-error">
            {passwordInvalid && <p>Please valid password</p>}
          </div> */}
          <Input
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            type="password"
            name="Password"
            id="password"
            value={formInput.password}
          >
            {passwordInvalid && <p>Please valid password</p>}
          </Input>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
