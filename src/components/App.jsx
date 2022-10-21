import { Component } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import { Container, Title, Text } from './App.styled';

class App extends Component {
  state = {
    todos: [],
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

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилося поле todos, записую todos в сховище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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
      <Container>
        <Title>Список тудушок</Title>
        <Text className="TodoList_describe">
          <p>Загальна кількість тудушок: {totalTodoCount}</p>
          <p>Кількість виконаних тудушок: {completedTodoCount}</p>
        </Text>
        <TodoEditor onSubmit={addTodo} />
        <Filter value={filter} onChange={filterChange} />
        <TodoList
          todos={FilterTodos}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
