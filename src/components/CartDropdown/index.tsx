import {CartIcon} from 'components/CartIcon';
import {CartList} from 'components/CartList';
import {Dropdown} from 'components/Dropdown';
import * as S from './styles';

export const CartDropdown = () => (
  <S.WrapperCartDropdown>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </S.WrapperCartDropdown>
);
