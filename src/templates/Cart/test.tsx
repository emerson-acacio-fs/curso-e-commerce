import 'match-media-mock';
import {screen} from '@testing-library/react';
import {Cart} from '.';
import {render} from 'utils/test-utils';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import itemsMock from 'components/CartList/mock';

const props = {
  items: itemsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'You may like these games',
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  Base: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

jest.mock('components/CartList', () => ({
  __esModule: true,
  CartList: function Mock() {
    return <div data-testid="Mock Cart" />;
  },
}));

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  PaymentOptions: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
  },
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />);

    expect(screen.getByRole('heading', {name: /my cart/i})).toBeInTheDocument();
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  });
});
