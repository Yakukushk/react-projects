import { Label, Input, FormGroup, Textarea } from "../assets/tailwind-classes";

export default function InputArea ({isTextArea, label, placeholder, ...props}) {
    return (
        <>
        <FormGroup>
            <Label>{label}</Label>
             {isTextArea === false ? (
               <Input {...props} placeholder={placeholder}/>
             ) : (
                <Textarea {...props} placeholder={placeholder}/>
             )}
        </FormGroup>
        </>
    );
}