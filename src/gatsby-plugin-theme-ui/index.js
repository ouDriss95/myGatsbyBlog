import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: '#5C6DA9',
    secondary: '#73737D',
    accent: '#B79488',
    grey: '#73737D',
    background: '#fff',
    
  },
};