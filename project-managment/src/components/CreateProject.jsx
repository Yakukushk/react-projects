import { useRef, useState } from "react";
import {
  DialogFooter,
  Container,
  ButtonSecondary,
  ButtonPrimary,
  SidebarTitle,
  Heading,
  Text
} from "../assets/tailwind-classes";
import InputArea from "./Input";
import Modal from "./Modal";

export default function CreateProject({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();
  const [valid, setValid] = useState(true);

  const handleAddProject = () => {
    const entityTitle = title.current.value;
    const entityDescription = description.current.value;
    const entityDueDate = dueDate.current.value;

    if (
      entityTitle.trim() === "" ||
      entityDescription.trim() === "" ||
      entityDueDate.trim() === ""
    ) {
      modalRef.current.open();
      setValid(false);
      return;
    }
    
      onSave({
        title: entityTitle,
        description: entityDescription,
        dueDate: entityDueDate,
      });

    onCancel();
  };

  const handleInputFocus = () => {
    setValid(true);
  };

  return (
    <>
    <Modal ref={modalRef} buttonTitle={'Close'}>
      <Heading level={2}>Invalid Input</Heading>
      <Text>Please, check your fields</Text>
    </Modal>
    <Container>
      <DialogFooter>
        <li>
          <ButtonSecondary onClick={onCancel}>Cancel</ButtonSecondary>
        </li>
        <li>
          <ButtonPrimary onClick={handleAddProject}>Save</ButtonPrimary>
        </li>
      </DialogFooter>
      <div>
        <InputArea
          valid={valid}
          type="text"
          ref={title}
          label={"Project Title"}
          placeholder={"Azure Service"}
          isTextArea={false}
          onFocus={handleInputFocus}
        />
        <InputArea
          valid={valid}
          type="text"
          ref={description}
          label={"Description"}
          placeholder={"Containers, Deployment, etc."}
          isTextArea={true}
          onFocus={handleInputFocus}
        />
        <InputArea
          valid={valid}
          type="date"
          ref={dueDate}
          label={"Due Date"}
          placeholder={"11.02.2024"}
          isTextArea={false}
          onFocus={handleInputFocus}
        />
      </div>
    </Container>
    </>
  );
}
