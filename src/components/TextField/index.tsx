import {useState, InputHTMLAttributes} from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  iconPosition = 'left',
  icon,
  disabled = false,
  error,
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
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          {...props}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.WrapperTextField>
  );
};
