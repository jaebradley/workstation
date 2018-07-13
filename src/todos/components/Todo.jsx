import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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

const Todo = ({
  id, name, description, toggleTodo, isChecked,
}) => (
  <ListItem
    key={id}
    role={undefined}
    dense
    button
    onClick={value => toggleTodo(value)}
  >
    <Checkbox
      checked={isChecked}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments">
        <CommentIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Todo;
