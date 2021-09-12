import {screen} from '@testing-library/react';
import {GameItem} from '.';
import {render} from 'utils/test-utils';
import {CartContextDefaultValues} from 'hooks/use-cart';
import userEvent from '@testing-library/user-event';

const props = {
  id: '1',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
};

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', {name: props.title}),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', {name: props.title})).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
  });
  it('should render the item with download link', () => {
    const downloadLink = 'https://link';

    render(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole('link', {name: `Get ${props.title} here`}),
    ).toHaveAttribute('href', downloadLink);
  });
  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn(),
    };
    render(<GameItem {...props} />, {cartProviderProps});

    const removeLink = screen.getByText(/remove/i);
    expect(removeLink).toBeInTheDocument();

    userEvent.click(removeLink);
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
  });
});
