import { useRef, useState } from "react";

export default function Login() {
  const email = useRef('');
  const password = useRef('');

  // const handleChange = (identifier, event) => {
  //   setFormInput((prev) => ({
  //     ...prev,
  //     [identifier]: event.target.value,
  //   }));
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted " + email.current.value + " " + password.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            id="email"
            type="email"
            name="email"
            value={email.current.value}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={password}
            type="password"
            name="password"
            value={password.current.value}
          />
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
