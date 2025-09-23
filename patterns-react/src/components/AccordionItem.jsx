import { useAccordionContext } from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({ id, className, title, children }) {
  const { openId } = useAccordionContext();

  return (
    <li className={className}>
      <AccordionItem.Title id={id}>{title}</AccordionItem.Title>
      <AccordionItem.Content id={id}>{children}</AccordionItem.Content>
    </li>
  );
}
AccordionItem.Title = AccordionTitle;
AccordionItem.Content = AccordionContent;
