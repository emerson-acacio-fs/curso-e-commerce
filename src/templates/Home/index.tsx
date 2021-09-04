import {Showcase} from 'components/Showcase';
import {Base} from 'templates/Base';
import {BannerProps} from '../../components/Banner';
import {BannerSlider} from '../../components/BannerSlider';
import {Container} from '../../components/Container';
import {GameCardProps} from '../../components/GameCard';
import {HighlightProps} from '../../components/Highlight';
import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase title="Upcoming" games={upcomingGames} />

    <Showcase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
);
