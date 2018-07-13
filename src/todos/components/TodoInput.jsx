import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TodoInput extends Component {
  state = {
    name: 'name',
    description: 'description',
  }

  render() {
    return (
      <form>
        <TextField
          id="name"
          label="name"
          value={this.state.name}
          margin="normal"
        />
        <TextField
          id="description"
          label="description"
          value={this.state.description}
          margin="normal"
        />
      </form>
    )
  }
}

export default withStyles(styles)(TodoInput);
