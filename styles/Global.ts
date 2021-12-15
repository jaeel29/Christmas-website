import { createGlobalStyle, css } from 'styled-components';

const GlobaleStyle = createGlobalStyle`${css`
  @font-face {
    font-family: 'E-L';
    src: url('/fonts/EudoxusSans-Light.woff') format('woff');
    font-style: normal;
    font-weight: lighter;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'E-M';
    src: url('/fonts/EudoxusSans-Medium.woff') format('woff');
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'E-B';
    src: url('/fonts/EudoxusSans-Bold.woff') format('woff');
    font-style: normal;
    font-weight: bold;
    font-display: fallback;
    /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'icons';
    src: url('/assets/Icons/Icons-g/icons.ttf') format('truetype');
  }

  // prettier-ignore
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
  h6, p, blockquote, pre, a, abbr, acronym, address, big,
  cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
  strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
  dd, ol, ul, li,fieldset, form, label, legend,table, caption,
  tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  img,
  fieldset,
  a img {
    border: none;
  }

  button {
    cursor: pointer;
    background: none;

    /* &::-moz-focus-inner {
      padding: 0;
      border: 0;
    } */
  }

  textarea {
    overflow: auto;
  }

  input,
  button {
    margin: 0;
    padding: 0;
    border: 0;
  }

  // prettier-ignore
  div, input, textarea, select,button,
  h1,h2,h3,h4,h5,h6,a,span,a:focus {
    outline: none
  }

  ul,
  ol {
    list-style-type: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Eux-Bold', sans-serif;
    font-weight: 400;
    line-height: 1;
  }

  /* * {
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
    font-family: 'Eux-Bold', sans-serif;
    min-width: 375px;
    font-weight: 400;
    line-height: 1;
  } */
`}`;

export default GlobaleStyle;
