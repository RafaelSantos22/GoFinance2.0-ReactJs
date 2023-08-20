
import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import { ErrorMessage, ErrorMessageType } from "../ErrorMessage";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    errors: ErrorMessageType;
}

export const FormInput = ({ name, type, id, placeholder, errors,  ...props }: FormInputProps) => {
    return (
        <div>
            <Field name={name} type={type} id={id} placeholder={placeholder} {...props} />
            <ErrorMessage msg={errors} />
        </div>
    );
}