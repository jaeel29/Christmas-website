/*
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line heights
Default: 1
Small: 1.05
Medium: 1.2
Paragraph default: 1.6

- Letter spacing
-0.5px
0.75px

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
#fae5d3
#eb984e

- Shades: 
#cf711f
#45260a

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f (lightest grey allowed on #fdf2e9)
#555
#333

--- 05 SHADOWS

0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER-RADIUS

Default: 9px
Medium: 11px

--- 07 WHITESPACE

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

*/

export const theme = {
  // colors
  colors: {
    primary: '#58C27D',
    primaryDark: '#4faf71',
    primaryDark2: '#35744b',
    primaryLight: '#ecf7e6',
    primaryLight2: '#c5e7b4',
    white: '#ffffff',
    black: '#000000',

    n1: '#141416',
    n2: '#23262F',
    n3: '#353945',
    n4: '#777E90',
    n5: '#B1B5C3',
    n6: '#E6E8EC',
    n7: '#F4F5F6',
    n8: '#FCFCFD',
  },

  fontSizes: {
    fs10: '1rem',
    fs12: '1.2rem',
    fs14: '1.4rem',
    fs16: '1.6rem',
    fs18: '1.8rem',
    fs20: '2rem',
    fs24: '2,4rem',
    fs30: '3rem',
    fs36: '3.6rem',
    fs44: '4.4rem',
    fs52: '5.2rem',
    fs56: '5.6rem',
    fs62: '6.2rem',
    fs74: '7.4rem',
    fs86: '8.6rem',
    fs98: '9.8rem',
  },

  spacing: {
    s02: '2px',
    s04: '4px',
    s08: '8px',
    s12: '12px',
    s24: '24px',
    s32: '32px',
    s48: '48px',
    s64: '64px',
  },
};
