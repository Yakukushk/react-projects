import { useState } from "react";
import Output from "./Output";

export default function Grettings() {
    const [changedText, setChangedText] = useState(false);
    const handleChangeText = () => {
        setChangedText(true);
    }
  return (
    <>
      <h1>Hello World</h1>
      {changedText ? <Output><p>New Text</p> </Output> : <Output><p>It's good to see you</p></Output>}
      <button onClick={handleChangeText}>Change Text</button>
    </>
  );
}
