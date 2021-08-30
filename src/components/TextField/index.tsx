import {useState, InputHTMLAttributes} from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  initialValue = '',
  onInput,
  iconPosition = 'left',
  icon,
  disabled = false,
  error,
  name = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    !!onInput && onInput(newValue);
  };

  return (
    <S.WrapperTextField disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          {...props}
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? {id: name} : {})}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.WrapperTextField>
  );
};
