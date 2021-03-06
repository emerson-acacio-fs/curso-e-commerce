import {screen} from '@testing-library/react';
import {theme} from 'styles/theme';
import {ProfileMenu} from '.';
import {render} from 'utils/test-utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
  prefetch: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
}));

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const {container} = render(<ProfileMenu />);

    expect(screen.getByRole('link', {name: /my profile/i})).toBeInTheDocument();

    expect(screen.getByRole('link', {name: /my cards/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /my orders/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /sign out/i})).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByRole('link', {name: /my cards/i})).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white,
    });
  });
});
