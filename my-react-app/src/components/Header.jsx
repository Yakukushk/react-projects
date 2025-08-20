import { useState } from "react";
import logo from "../logo192.png";

function Header({title}) {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);
    return (
      <header className="">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
          <img  className="h-10 w-auto" src={logo} alt="logo" />
          <h1 className="text-3xl ml-2">{title}</h1>
          </div>
          <span className="text-2xl text-gray-500">Time now: {now.toLocaleTimeString()}</span>
        </div>
      </header>
    )
  } 

export default Header;