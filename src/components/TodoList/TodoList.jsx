import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
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
