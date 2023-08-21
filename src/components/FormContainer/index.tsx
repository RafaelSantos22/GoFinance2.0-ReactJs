import { validationSchema } from '../../utils/validations';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { FormInput } from '../FormInput';
import { FormValues, Props, initialValues } from './structure';
import styles from './styles.module.css';
import { Formik, Form } from 'formik';
import { useState } from 'react';

export const FormContainer: React.FC<Props> = ({
  formType,
  handleSubmit,
  error
}) => {
  const selectedInitialValues = initialValues[formType];
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (values: FormValues) => {
    if (formType === 'register' && !isChecked) {
      return;
    }

    handleSubmit(values);
    setIsChecked(false);
  };

  return (
    <Formik<FormValues>
      initialValues={selectedInitialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema(formType)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
        <Form className={styles.formContainer}>
          {formType === 'login' ? (
            <>
              <FormInput
                className={`${styles.input} ${styles.emailIcon}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                errors={touched.email && errors.email}
              />
              <FormInput
                className={`${styles.input} ${styles.passwordIcon}`}
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                maxLength={8}
                errors={touched.password && errors.password}
              />
              {error && <ErrorMessage msg="Usuario ou senha incorretos" />}
              <Button type="submit">Entrar</Button>
            </>
          ) : (
            <>
              <FormInput
                className={`${styles.input} ${styles.userIcon}`}
                type="text"
                id="name"
                name="name"
                placeholder="Nome e Sobrenome"
                errors={touched.name && errors.name}
              />
              <FormInput
                className={`${styles.input} ${styles.emailIcon}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                errors={touched.email && errors.email}
              />
              <FormInput
                className={`${styles.input} ${styles.passwordIcon}`}
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                maxLength={8}
                errors={touched.password && errors.password}
              />
              <FormInput
                className={`${styles.input} ${styles.passwordIcon}`}
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirma Senha"
                maxLength={8}
                errors={
                  touched.password_confirmation && errors.password_confirmation
                }
              />
              <div className={styles.checkboxContainer}>
                <div className={styles.checkbox}>
                  <label>
                    <FormInput
                      type="checkbox"
                      name="checked"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      errors={touched.checked && errors.checked}
                    />
                    <span className={styles.check}>{isChecked && 'X'}</span>
                  </label>
                </div>
                <p className={styles.terms}>
                  Declaro que li e concordo com os termos e condições de uso.
                </p>
              </div>
              {error && <ErrorMessage msg="Email já cadastrado!" />}
              <Button type="submit" disabled={!isChecked}>
                Cadastrar
              </Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
