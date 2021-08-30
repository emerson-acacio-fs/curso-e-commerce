import {ShoppingCart} from '@styled-icons/material-outlined/ShoppingCart';
import * as S from './styles';

export type CartIconProps = {
  quantity?: number;
};

export const CartIcon = ({quantity = 0}: CartIconProps) => (
  <S.WrapperCartIcon>
    {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.WrapperCartIcon>
);
