import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [formInput, setFormInput] = useState({
    email: undefined || "",
    password: undefined || "",
  });

  const handleChange = (identifier, event) => {
    setFormInput((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted " + formInput.email + " " + formInput.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleChange("email", e)}
            id="email"
            type="email"
            name="email"
            value={formInput.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => handleChange("password", e)}
            id="password"
            type="password"
            name="password"
            value={formInput.password}
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
