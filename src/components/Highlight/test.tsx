import {screen} from '@testing-library/react';
import { Highlight } from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Highlight />', () => {
  it('should render a white label by dfault', () => {
    renderWithTheme(<Highlight />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
