import { Component } from 'react';
import TodoList from './TodoList';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const { deleteTodo } = this;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <div className="Container">
        <h1>Список тудушок</h1>
        <div className="TodoList_describe">
          <p>Загальна кількість тудушок: {totalTodoCount}</p>
          <p>Кількість виконаних тудушок: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;
