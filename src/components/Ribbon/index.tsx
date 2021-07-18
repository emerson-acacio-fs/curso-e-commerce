import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSize = 'normal' | 'small';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSize;
};

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => (
  <S.WrapperRibbon color={color} size={size}>
    {children}
  </S.WrapperRibbon>
);
