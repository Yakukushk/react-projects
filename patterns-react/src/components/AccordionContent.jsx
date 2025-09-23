import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ id, children }) {
  const { openId } = useAccordionContext();
  return (
    <div
      className={
        openId === id ? "accordion-item-content open" : "accordion-item-content"
      }
    >
      {children}
    </div>
  );
}
