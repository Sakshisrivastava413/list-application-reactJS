import React, { Component } from 'react';
import List from './List';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: "",
      copy: "",
      list: JSON.parse(localStorage.getItem(this.props.lock)) || []
    }
    console.log(JSON.parse(localStorage.getItem(this.props.lock)) || []);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.localData = this.localData.bind(this);
  }

  componentDidMount() {
    // this.taskInput.focus();
    // console.log(items);
  }

  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  onSubmit(event) {
    if (this.state.task.trim() == "") return;
    // console.log(this.temp)
    this.setState({
      list: this.state.list.concat([this.state.task]),
      task: ""
    }, this.localData);
    console.log(this.state.list)
    // this.taskInput.focus();
  }

  localData() {
    localStorage.setItem(this.props.lock, JSON.stringify(this.state.list))
  }

  render() {
    return (
      <div>
        <TextField
          label="Add Items"
          id="mui-theme-provider-input"
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          // ref={(input) => { this.taskInput = input; console.log(this.taskInput) }}
        />

        <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>
        <hr />
        <List items={this.state.list} />
      </div>
    );
  }

}

export default (TodoList);
