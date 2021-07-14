import styled, {css} from 'styled-components';
import media, {DefaultBreakpoints} from 'styled-media-query';

type BreakPoints = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: BreakPoints;
  greaterThan?: BreakPoints;
};

const mediaMatchModifires = {
  lessThan: (size: BreakPoints) => css`
    ${media.lessThan(size)`display:block; `}
  `,
  greaterThan: (size: BreakPoints) => css`
    ${media.greaterThan(size)`display:block;`}
  `,
};

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({lessThan, greaterThan}) => css`
    display: none;
    ${!!lessThan && mediaMatchModifires.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifires.greaterThan(greaterThan)}
  `}
`;
