import {Button} from '../Button';
import {Ribbon, RibbonColors, RibbonSize} from '../Ribbon';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSize;
  ribbon?: React.ReactNode;
};

export const Banner = ({
  title,
  img,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbonColor = 'primary',
  ribbon,
  ribbonSize = 'normal',
}: BannerProps) => (
  <S.WrapperBanner>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{__html: subtitle}} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.WrapperBanner>
);
