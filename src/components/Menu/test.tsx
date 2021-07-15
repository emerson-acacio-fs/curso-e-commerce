import {screen} from '@testing-library/react';
import {Menu} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });
});
