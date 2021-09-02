import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {UserDropdown} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Willian" />);
    expect(screen.getByText(/Willian/i)).toBeInTheDocument();
  });
  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Willian" />);

    userEvent.click(screen.getByText(/Willian/i));
    expect(screen.getByRole('link', {name: /my profile/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /wishlist/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /sign out/i})).toBeInTheDocument();
  });
});
