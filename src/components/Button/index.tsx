import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.WrapperButton
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.WrapperButton>
);
