import { css } from 'styled-components';

export const Title = css`
  font-size: ${p => p.theme.fontSizes.fs56};
  font-family: 'E-B', sans-serif;
  color: ${p => p.theme.colors.primaryDark3};

  letter-spacing: -0.8px;
`;

export const HeadingSecondary = css`
  color: ${p => p.theme.colors.primaryDark3};

  font-size: 3.6rem;
  line-height: 1.2;
  font-family: 'E-B';
`;

export const Subheading = css`
  color: red;
  font-size: 1.5rem;
`;
