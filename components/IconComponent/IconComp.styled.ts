import styled, { css } from 'styled-components';

export const SIcon = styled.i<{
  size: number | undefined;
  color: string | undefined;
}>`
  font-family: icons !important;
  font-style: normal;
  font-weight: normal !important;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => (p.color ? p.theme.colors[p.color] : 'inherit')};
  font-size: ${({ size }) => size || 14}px;
`;
