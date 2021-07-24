import {screen} from '@testing-library/react';
import {Home} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Home />', () => {
  it('should render a menu and footer', () => {
    renderWithTheme(<Home />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /contact us/i}),
    ).toBeInTheDocument();
  });
  it('should render the sections', () => {
    renderWithTheme(<Home />);

    expect(screen.getByRole('heading', {name: /news/i})).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /most popular/i}),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /upcomming/i}),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /free games/i}),
    ).toBeInTheDocument();
  });
});
