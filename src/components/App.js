/**
 * 主应用
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { blue, pink } from 'material-ui/styles/colors';
import MuiThemeProvider, { MUI_SHEET_ORDER } from 'material-ui/styles/MuiThemeProvider';

import routes from '../routes';

let styleManager;

const App = ({ history }) => {

  const palette = createPalette({
    primary: blue,
    accent: pink,
    type: 'light'
  });

  const theme = createMuiTheme({ palette });

  if (!styleManager) {
    const themeContext = MuiThemeProvider.createDefaultContext({ theme });
    styleManager = themeContext.styleManager;
  } else {
    styleManager.updateTheme(theme);
  }

  styleManager.setSheetOrder(MUI_SHEET_ORDER.concat([
    'AppContent',
    'AppDrawer',
    'AppDrawerNavItem',
    'AppFrame',
    'MarkdownDocs',
    'MarkdownElement',
    'Demo',
  ]));
  
  return (
    <MuiThemeProvider theme={theme} styleManager={styleManager}>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;