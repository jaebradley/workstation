import React from 'react';
import { connect } from 'react-redux';
import TodoList from 'Todos/components/TodoList';
import TodoInput from 'Todos/components/TodoInput';
import {
  addTodo,
} from './actions';

const mapStateToProps = state => (
  {
    todos: state.todos,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addTodo: () => dispatch(addTodo()),
  }
);

const Todos = props => (
  <div>
    <TodoInput />
    <TodoList {...props} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
