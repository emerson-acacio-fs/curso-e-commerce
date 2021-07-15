import {Menu2 as MenuIcon} from '@styled-icons/remix-fill/Menu2';
import {ShoppingCart as ShoppingCartIcon} from '@styled-icons/material-outlined/ShoppingCart';
import {Search as SearchIcon} from '@styled-icons/material-outlined/Search';

import * as S from './styles';
import {Logo} from '../Logo';

export type MenuProps = {
  a?: string;
};

export const Menu = (props: MenuProps) => (
  <S.WrapperMenu>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGoup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGoup>
  </S.WrapperMenu>
);
