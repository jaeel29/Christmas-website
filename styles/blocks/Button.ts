import { css } from 'styled-components';

export const Button = css<{ light?: boolean }>`
  padding: 1.5rem 2.5rem;
  /* margin: 0 1.5rem 0 0; */
  display: inline-block;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 8px;
  max-width: 22rem;

  ${p =>
    p.light
      ? css`
          border: 2px solid ${p => p.theme.colors.primaryLight2};
          color: ${p => p.theme.colors.primaryDark2};
          background-color: transparent;

          &:hover {
            background-color: ${p => p.theme.colors.primaryLight2};
          }
        `
      : css`
          background-color: ${p => p.theme.colors.primary};
          color: ${p => p.theme.colors.white};

          &:hover {
            background-color: ${p => p.theme.colors.primaryDark};
          }
        `}
`;
