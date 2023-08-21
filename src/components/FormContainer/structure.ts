export const initialValues = {
  login: {
    email: '',
    password: ''
  },
  register: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    checked: false
  }
};

export type FormValues = {
  email: string;
  password: string;
  password_confirmation?: string;
  name?: string;
  checked?: boolean;
};

export type FormType = 'login' | 'register';

export type Props = {
  formType: FormType;
  handleSubmit: (values: FormValues) => void;
  error: boolean;
};
