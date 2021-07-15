import {screen} from '@testing-library/react';
import { Button } from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Button />', () => {
  it('should render a white label by dfault', () => {
    renderWithTheme(<Button />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
