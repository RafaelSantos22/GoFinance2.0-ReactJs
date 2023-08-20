import * as Yup from 'yup';
import { errorsMessages } from './messages';
import { FormType } from '../components/FormContainer/structure';

export const validateFullName = (name: string) => {
    const names = name.split(' ');
    if (!name) {
        return false;
    }
    return names.length >= 2;
}

export const validatePassword = (password: string) => {
    if(!password) {
        return false;
    }
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password);
}

const validatePasswordConfirmation = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
};

export const validationSchema = (formType: FormType) => {
    if (formType === 'login') {
        return Yup.object().shape({
            email: Yup.string().email(errorsMessages.email.invalid).required(errorsMessages.email.required),
            password: Yup.string().required(errorsMessages.password.required)
        });
    } else if (formType === 'register') {
        return Yup.object().shape({
            name: Yup.string().required(errorsMessages.name.required).test('fullname', errorsMessages.name.fullname, validateFullName),
            email: Yup.string().email(errorsMessages.email.invalid).required(errorsMessages.email.required),
            password: Yup.string().required(errorsMessages.password.required)
                .min(6, errorsMessages.password.min)
                .test('validate-password', errorsMessages.password.validate, validatePassword),
            confirmPassword: Yup.string().required(errorsMessages.confirmPassword.required)
                .test('confirm-password', errorsMessages.confirmPassword.samePasswords, function(value) { 
                    validatePasswordConfirmation(this.parent.password, value) 
                }),
        });
    }
};