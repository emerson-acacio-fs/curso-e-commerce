import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <S.WrapperHeading color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.WrapperHeading>
);
