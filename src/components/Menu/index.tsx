import {useState} from 'react';

import {Menu2 as MenuIcon} from '@styled-icons/remix-fill/Menu2';
import {ShoppingCart as ShoppingCartIcon} from '@styled-icons/material-outlined/ShoppingCart';
import {Search as SearchIcon} from '@styled-icons/material-outlined/Search';
import {Close as CloseIcon} from '@styled-icons/material-outlined/Close';
import * as S from './styles';
import {Logo} from '../Logo';
import {Button} from '../Button';
import {MediaMatch} from '../MediaMatch';

export type MenuProps = {
  username?: string;
};

export const Menu = ({username}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.WrapperMenu>
      <MediaMatch lessThan="medium">
        <S.IconWrapper
          onClick={() => {
            setIsOpen(true);
          }}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGoup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGoup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAcount href="#" title="Sign Up">
              Sign Up
            </S.CreateAcount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.WrapperMenu>
  );
};
