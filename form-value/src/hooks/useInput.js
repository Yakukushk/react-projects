import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredData, setEnteredData] = useState(defaultValue);
  const [didItEdit, setDidItEdit] = useState(false);

  const valueIsValid = validationFn(enteredData);
  const handleChange = (event) => {
    setEnteredData(event.target.value);
    setDidItEdit(false);
  };

  const handleBlur = () => {
    setDidItEdit(true);
  };

  return {
    value: enteredData,
    handleChange,
    handleBlur,
    hasError: didItEdit && !valueIsValid
  };
}
