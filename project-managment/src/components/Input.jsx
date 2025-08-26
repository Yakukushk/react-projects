import { forwardRef } from "react";
import { Label, Input, FormGroup, Textarea } from "../assets/tailwind-classes";

const InputArea =  forwardRef(function InputArea ({isTextArea, label, placeholder, ...props}, ref) {
    return (
        <>
        <FormGroup>
            <Label>{label}</Label>
             {isTextArea === false ? (
               <Input ref={ref} {...props} placeholder={placeholder}/>
             ) : (
                <Textarea ref={ref} {...props} placeholder={placeholder}/>
             )}
        </FormGroup>
        </>
    );
});

export default InputArea;