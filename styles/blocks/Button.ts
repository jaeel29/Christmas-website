import { css } from 'styled-components';

export const Button = css<{ light?: boolean }>`
  height: 50px;
  padding: 1.5rem 2.5rem;
  display: inline-block;
  font-family: 'E-M';
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-out;
  line-height: 0.8;

  ${p =>
    p.light
      ? css`
          /* border: 2px solid ${p => p.theme.colors.primaryLight2}; */
          box-shadow: inset 0 0 0 2.5px ${p => p.theme.colors.primaryLight2};
          color: ${p => p.theme.colors.primaryDark2};
          background-color: transparent;

          &:hover {
            background-color: ${p => p.theme.colors.primaryLight2};
          }
        `
      : css`
          background-color: ${p => p.theme.colors.primaryDark2};
          color: ${p => p.theme.colors.white};

          &:hover {
            background-color: ${p => p.theme.colors.primaryDark};
          }
        `}
`;
