import {screen} from '@testing-library/react';
import {CartList} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

import mockItems from './mock';

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const {container} = renderWithTheme(
      <CartList items={mockItems} total="R$ 330,00" />,
    );

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({color: '#F231A5'});

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the button', () => {
    renderWithTheme(<CartList hasButton items={mockItems} total="R$ 330,00" />);

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });
  it('should render empty if there  are no games ', () => {
    renderWithTheme(<CartList />);

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});