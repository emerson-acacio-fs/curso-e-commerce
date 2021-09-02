import {gql} from '@apollo/client';
import {Home, HomeTemplateProps} from '../templates/Home';
import bannersMock from '../components/BannerSlider/mock';
import gamesMock from '../components/GameCardSlider/mock';
import highlightMock from '../components/Highlight/mock';
import {initializeApollo} from 'utils/apollo';

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`;

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}
