import { memo, useCallback, useState } from "react";

interface IChild {
    onClick: () => void
}
const Child = memo(({ onClick } : IChild) => {
    console.log("Child render");
    return <button onClick={onClick}>Click me</button>;
  });
  
  export default function ButtonCounter() {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      console.log("Clicked");
    }, []);
  
    return (
      <div>
        <p>Count: {count}</p>
        <Child onClick={handleClick} />
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    );
  }
  