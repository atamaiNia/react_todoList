import PropTypes from 'prop-types';
import { Container, TodoInput, Text, BtnDelete } from './Todo.styled';

const Todo = ({ completed, onToggleCompleted, text, onDeleteTodo }) => {
  return (
    <Container>
      <TodoInput
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <Text> {text}</Text>
      <BtnDelete onClick={onDeleteTodo}>Удалити</BtnDelete>
    </Container>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
export default Todo;
