import { css } from 'styled-components';

export const GridTwoColumns = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
`;

export const GridThreeColumns = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
`;

export const GridFourColumns = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
`;
