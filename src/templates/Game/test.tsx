import {screen} from '@testing-library/react';
import { Game } from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Game />', () => {
  it('should render a white label by dfault', () => {
    renderWithTheme(<Game />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
