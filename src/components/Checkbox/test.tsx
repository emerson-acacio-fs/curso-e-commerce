import {screen, waitFor} from '@testing-library/react';
import {Checkbox} from '.';
import {theme} from '../../styles/theme';
import {render} from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const {container} = render(
      <Checkbox label="checkbox label" labelFor="check" />,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render with label', () => {
    render(<Checkbox />);

    expect(screen.queryByLabelText(/Checkbox/i)).not.toBeInTheDocument();
  });
  it('should render with black label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.queryByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });
  it('should be accessible with tab', () => {
    render(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
