import {ShoppingCart} from '@styled-icons/material-outlined/ShoppingCart';
import {useCart} from 'hooks/use-cart';
import * as S from './styles';

export const CartIcon = () => {
  const {quantity} = useCart();
  return (
    <S.WrapperCartIcon>
      {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </S.WrapperCartIcon>
  );
};
