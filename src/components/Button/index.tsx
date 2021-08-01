import {ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef} from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

const ButtonOnly: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> =
  (
    {
      children,
      size = 'medium',
      fullWidth = false,
      icon,
      minimal = false,
      ...props
    },
    ref,
  ) => (
    <S.WrapperButton
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
      ref={ref}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.WrapperButton>
  );

export const Button = forwardRef(ButtonOnly);
