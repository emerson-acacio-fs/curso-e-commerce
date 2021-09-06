import styled, {css} from 'styled-components';
import {tint} from 'polished';
import media from 'styled-media-query';
import {WrapperEmpty, Image, Title, Description} from 'components/Empty/styles';

type WrapperProps = {isEmpty: boolean};

export const WrapperCartList = styled.div<WrapperProps>`
  ${({theme, isEmpty}) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
    ${isEmpty &&
    css`
      ${WrapperEmpty} {
        padding-bottom: ${theme.spacings.medium};
      }
      ${Image} {
        max-width: 20rem;
      }
      ${Title} {
        font-size: ${theme.font.sizes.large};
      }
      ${Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`;

export const Footer = styled.div`
  ${({theme}) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`;

export const Total = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;