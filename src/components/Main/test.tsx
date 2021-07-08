import {screen, render} from '@testing-library/react';

import {Main} from '.';
import {theme} from '../../styles/theme';
describe('<Main />', () => {
  it('should render the handing', () => {
    const {container} = render(<Main />);
    expect(
      screen.getByRole('heading', {name: /react avançado/i}),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the colors correctly', () => {
    const {container} = render(<Main />);
    expect(container.firstChild).toHaveStyle({
      'background-color': theme.backgroundColor,
    });
  });
});
