import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if(!ctx) {
        throw new Error('Undefined Context');
    }
    return ctx;
}
export default function Accordion({ className, children }) {
  const [openId, setOpenId] = useState(null);
//   const openItem = (id) => {
//     setOpenId(id);
//   };
//   const closeItem = () => {
//     setOpenId(null);
//   };
  const toggleItem = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  }
  const contextValue = {
    openId,
    toggleItem
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;