import {Button} from '../Button';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

export const Banner = ({
  title,
  img,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <S.WrapperBanner>
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
