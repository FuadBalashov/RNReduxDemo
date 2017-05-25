import React, {PropTypes} from 'react';
import Todo from './Todo';
import { View } from 'react-native';

const TodoList = ({todos, onTodoClick}) => {
  return (
    <View>
      {todos.map( todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </View>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;