import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';

import { withStyles } from '@material-ui/core/styles';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="My TodoList"
            showMenuIconButton={false}
            color="primary"
          />
          <Card>
            <TodoList lock="mytodolist1" />
            <TodoList lock="mytodolist2" />
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);
