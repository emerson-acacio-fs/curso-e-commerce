import styled, {css} from 'styled-components';

import {Container} from 'components/Container';
import * as HeadingStyles from 'components/Heading/styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/styles';
import * as HighlightStyles from 'components/Highlight/styles';
import media from 'styled-media-query';

export const WrapperShowcase = styled(Container).attrs({as: 'section'})`
  ${({theme}) => css`
    ${HeadingStyles.WrapperHeading},
    ${HighlightStyles.WrapperHighlight},
    ${GameCardSliderStyles.WrapperGameCardSlider} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${HighlightStyles.WrapperHighlight} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${GameCardSliderStyles.WrapperGameCardSlider} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;
