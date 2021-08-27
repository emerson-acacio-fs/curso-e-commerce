import Link from 'next/link';
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
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
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
            <Link href="/sign-in" passHref>
              <Button>Sign in</Button>
            </Link>
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
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
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
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAcount href="#" title="Sign Up">
                Sign Up
              </S.CreateAcount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.WrapperMenu>
  );
};
