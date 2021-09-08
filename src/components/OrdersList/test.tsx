import {screen} from '@testing-library/react';
import {OrdersList} from '.';
import {render} from 'utils/test-utils';

import mock from './mock';

jest.mock('components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

jest.mock('components/GameItem', () => ({
  __esModule: true,
  GameItem: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock GameItem">{children}</div>;
  },
}));

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    render(<OrdersList items={mock} />);

    expect(
      screen.getByRole('heading', {name: /my orders/i}),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
  });

  it('should render empty state', () => {
    render(<OrdersList />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
