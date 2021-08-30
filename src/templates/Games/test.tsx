import {screen} from '@testing-library/react';
import {GamesTemplate} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

import gamesMock from 'components/GameCardSlider/mock';
import filterItemsMock from 'components/ExploreSidebar/mock';

jest.mock('templates/Base', () => ({
  __esModule: true,
  Base: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  },
}));

jest.mock('components/GameCard', () => ({
  __esModule: true,
  GameCard: function Mock() {
    return <div data-testid="Mock GameCard" />;
  },
}));

describe('<GamesTemplate />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <GamesTemplate filterItems={filterItemsMock} games={[gamesMock[0]]} />,
    );

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument();

    expect(
      screen.getByRole('button', {name: /show more/i}),
    ).toBeInTheDocument();
  });
});
