import {screen} from '@testing-library/react';
import {Wishlist} from '.';
import {render} from 'utils/test-utils';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  games: gamesMock,
  recommendedTitle: 'You may like these games',
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', {name: /wishlist/i}),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });
});
