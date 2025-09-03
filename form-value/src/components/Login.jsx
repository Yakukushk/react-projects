import { useRef, useState } from "react";

export default function Login() {
  const email = useRef("");
  const password = useRef("");
  const [emailInValid, setEmailInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailEntered = email.current.value;

    const emailValid = emailEntered.includes("@");

    if (!emailValid) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);
    console.log(
      "Submitted " + email.current.value + " " + password.current.value
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            required
            id="email"
            type="email"
            name="email"
            value={email.current.value}
          />
          <div className="control-error">
            {emailInValid && <p>Invalid Email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={password}
            required
            type="password"
            name="password"
            value={password.current.value}
            minLength={4}
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
