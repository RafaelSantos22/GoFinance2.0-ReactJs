export const initialValues = {
    login: {
      email: '',
      password: '',
    },
    register: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      checked: false,
    },
};
  
export type FormValues = {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
    checked?: boolean;
};

export type FormType = 'login' | 'register';

export type Props = {
    formType: FormType;
    handleSubmit: (values: FormValues) => void;
};
  
