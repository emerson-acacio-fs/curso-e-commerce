import {screen} from '@testing-library/react';
import {Footer} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Footer />', () => {
  it('should render a white label by dfault', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
