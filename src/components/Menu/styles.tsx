import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const WrapperMenu = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const MenuGoup = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: flex-end;

    flex-grow: 1;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
