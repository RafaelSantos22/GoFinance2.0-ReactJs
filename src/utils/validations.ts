import * as Yup from 'yup';
import { errorsMessages } from './messages';
import { FormType } from '../components/FormContainer/structure';

export const validateFullName = (name: string) => {
  const names = name.split(' ');
  if (!name) {
    return false;
  }
  return names.length >= 2;
};

export const validatePassword = (password: string) => {
  if (!password) {
    return false;
  }
  return /^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password);
};

const validatePasswordConfirmation = (
  password: string,
  password_confirmation: string
) => {
  return password === password_confirmation;
};

export const validationSchema = (formType: FormType) => {
  if (formType === 'login') {
    return Yup.object().shape({
      email: Yup.string()
        .email(errorsMessages.email.invalid)
        .required(errorsMessages.email.required),
      password: Yup.string().required(errorsMessages.password.required)
    });
  } else if (formType === 'register') {
    return Yup.object().shape({
      name: Yup.string()
        .required(errorsMessages.name.required)
        .test('fullname', errorsMessages.name.fullname, validateFullName),
      email: Yup.string()
        .email(errorsMessages.email.invalid)
        .required(errorsMessages.email.required),
      checked: Yup.boolean().required(errorsMessages.checked.required),
      password: Yup.string()
        .required(errorsMessages.password.required)
        .min(6, errorsMessages.password.min)
        .test(
          'validate-password',
          errorsMessages.password.validate,
          validatePassword
        ),
      password_confirmation: Yup.string()
        .required(errorsMessages.password_confirmation.required)
        .test(
          'confirm-password',
          errorsMessages.password_confirmation.samePasswords,
          function (value) {
            return validatePasswordConfirmation(this.parent.password, value);
          }
        )
    });
  }
};
