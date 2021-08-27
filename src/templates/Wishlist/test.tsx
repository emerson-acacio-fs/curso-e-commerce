import {screen} from '@testing-library/react';
import {Wishlist} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  games: gamesMock,
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', {name: /wishlist/i}),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });
});
