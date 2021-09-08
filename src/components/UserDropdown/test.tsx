import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {UserDropdown} from '.';
import {render} from 'utils/test-utils';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Willian" />);
    expect(screen.getByText(/Willian/i)).toBeInTheDocument();
  });
  it('should render the menu', () => {
    render(<UserDropdown username="Willian" />);

    userEvent.click(screen.getByText(/Willian/i));
    expect(screen.getByRole('link', {name: /my profile/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /wishlist/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /sign out/i})).toBeInTheDocument();
  });
});
