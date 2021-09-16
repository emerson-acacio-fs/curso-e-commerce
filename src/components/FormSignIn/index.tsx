import {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {Email, Lock, ErrorOutline} from '@styled-icons/material-outlined';
import {TextField} from '../TextField';
import * as S from './styles';
import {Button} from '../Button';
import {FormError, FormLink, FormLoading, FormWrapper} from 'components/Form';
import {signIn} from 'next-auth/client';
import {FieldErrors, signInValidate} from 'utils/validations';

export const FormSignIn = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const {push, query} = routes;

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({...s, [field]: value}));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
    });

    if (result?.url) {
      return push(result?.url);
    }
    setLoading(false);
    // jogar o erro
    setFormError('username or password is invalid');
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
