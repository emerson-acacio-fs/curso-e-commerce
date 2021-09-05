import 'match-media-mock';
import {screen} from '@testing-library/react';
import {renderWithTheme} from 'utils/tests/helpers';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import {Home} from '.';

const props = {
  banners: bannerMock,
  newGamesTitle: 'News',
  newGames: gamesMock,
  mostPopularGamesTitle: 'Most Popular',
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGamesTitle: 'Upcoming',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free games',
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
