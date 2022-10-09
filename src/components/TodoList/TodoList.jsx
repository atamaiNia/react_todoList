import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="Todolist__text"> {text}</p>
        <button className="Todolist__btn" onClick={() => onDeleteTodo(id)}>
          Удалити
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
