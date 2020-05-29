import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

export const muiTheme = createMuiTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
