import {screen} from '@testing-library/react';
import {Checkbox} from '.';
import {theme} from '../../styles/theme';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });
  it('should render with label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText(/Checkbox/i)).not.toBeInTheDocument();
  });
  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.queryByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });
});
