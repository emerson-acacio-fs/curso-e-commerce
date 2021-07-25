import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckboxProps) => (
  <S.WrapperCheckbox>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.WrapperCheckbox>
);