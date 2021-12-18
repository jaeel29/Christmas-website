import { css } from 'styled-components';

export const Title = css`
  font-size: ${p => p.theme.fontSizes.fs56};
  font-family: 'E-B', sans-serif;
  color: ${p => p.theme.colors.primaryDark4};

  letter-spacing: -0.8px;
`;

export const HeadingSecondary = css`
  color: ${p => p.theme.colors.primaryDark4};

  font-size: 4.8rem;
  line-height: 1.2;
  font-family: 'E-B';
  letter-spacing: -1px;
`;

export const HeadingTertiary = css`
  color: ${p => p.theme.colors.primaryDark4};
  font-size: 3.6rem;
  line-height: 1.2;
  font-family: 'E-B';
  letter-spacing: -1px;
  margin-bottom: 16px;
`;

export const Subheading = css`
  color: ${p => p.theme.colors.primary};
  font-size: 1.8rem;
  font-family: 'E-B';
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const NumberText = css`
  font-size: 9.6rem;
  color: ${p => p.theme.colors.primaryLight4};
  font-family: 'E-B';
  margin-bottom: 16px;
`;
