import React from 'react';
import { ThemeProvider } from 'styled-components';
import  Themes from '../src/Themes/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Themes.lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
