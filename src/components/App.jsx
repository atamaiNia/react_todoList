import { Component } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { todos, filter } = this.state;
    const { deleteTodo, toggleCompleted, addTodo, filterChange } = this;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    const normalizedFilter = this.state.filter.toLowerCase();
    const FilterTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="Container">
        <h1>Список тудушок</h1>
        <div className="TodoList_describe">
          <p>Загальна кількість тудушок: {totalTodoCount}</p>
          <p>Кількість виконаних тудушок: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={addTodo} />
        <Filter value={filter} onChange={filterChange} />
        <TodoList
          todos={FilterTodos}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
