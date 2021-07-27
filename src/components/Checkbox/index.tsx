import {InputHTMLAttributes, useState} from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  isChecked?: boolean;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  isChecked = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked; // true => false => true
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <S.WrapperCheckbox>
      <S.Input
        {...props}
        value={value}
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.WrapperCheckbox>
  );
};
