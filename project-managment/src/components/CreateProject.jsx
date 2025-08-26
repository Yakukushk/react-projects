import { DialogFooter, Container, ButtonSecondary, ButtonPrimary } from "../assets/tailwind-classes";
import InputArea from "./Input";

export default function CreateProject() {
  return (
    <Container>
      <DialogFooter>
        <li>
          <ButtonSecondary>Cancel</ButtonSecondary>
        </li>
        <li>
          <ButtonPrimary>Save</ButtonPrimary>
        </li>
      </DialogFooter>
      <div>
         <InputArea label={'Project Title'} placeholder={'Azure Service'} isTextArea={false}/>
         <InputArea label={'Description'} placeholder={'Containers, Deployment, etc.'} isTextArea={true}/>
         <InputArea label={'Due Date'} placeholder={'11.02.2024'} isTextArea={false}/>
      </div>
    </Container>
  );
}
