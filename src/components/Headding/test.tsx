import {screen} from '@testing-library/react';
import { Headding } from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Headding />', () => {
  it('should render a white label by dfault', () => {
    renderWithTheme(<Headding />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
