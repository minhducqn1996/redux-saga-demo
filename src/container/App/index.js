import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import styles from '../TaskBoard/styles';
import TaskBoard from '../TaskBoard';
import theme from './../../commons/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
