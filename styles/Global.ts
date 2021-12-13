import { createGlobalStyle, css } from 'styled-components';

const GlobaleStyle = createGlobalStyle`${css`
  @font-face {
    font-family: 'Eux-Light';
    src: url('/fonts/EudoxusSans-Light.woff') format('woff');
    font-style: normal;
    font-weight: lighter;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'Eux-Medium';
    src: url('/fonts/EudoxusSans-Medium.woff') format('woff');
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'Eux-Bold';
    src: url('/fonts/EudoxusSans-Bold.woff') format('woff');
    font-style: normal;
    font-weight: bold;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Eux-Bold';
    min-width: 375px;
    font-weight: 400;
    line-height: 1.6;
  }
`}`;

export default GlobaleStyle;
