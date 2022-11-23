import { Input, Label } from "./FormInput.style";

function FormInput({label, type} : { label: string, type: string }) {

    return(
            <div>
                <Label>{label}</Label><br />
                <Input type={type} />
            </div>
    )
}

export default FormInput;