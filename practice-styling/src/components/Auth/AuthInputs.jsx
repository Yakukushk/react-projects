import { useState } from "react";
import "./AuthInputs.css";
import {
  AuthContainer,
  AuthInput,
  AuthLabel,
  AuthButton,
  TextButton,
} from "./AuthStyledComponent.jsx";
import { CustomInput, CustomTailwindInput } from "./CustomInput.jsx";
import CustomAuthButton from "./tailwind/button.jsx";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-amber-800">
      <AuthContainer className="flex flex-col gap-4">
          <CustomTailwindInput
            type={"email"}
            label={"Email"}
            placeholder={"Email"}
            invalid={emailNotValid}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />

          <CustomTailwindInput
            type={"password"}
            label={"Password"}
            placeholder={"Password"}
            invalid={passwordNotValid}
            // style={{ backgroundColor: passwordNotValid ? '#fed2d2' : '#d1d5db' }}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
      </AuthContainer>
      <div className="flex justify-between">
        <TextButton type="button">Create a new account</TextButton>
        <CustomAuthButton onClick={handleLogin}>Sign In</CustomAuthButton>
      </div>

    </div>
  );
}
