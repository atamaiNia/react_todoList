import { Component } from 'react';
import { TodoForm, FormTextarea, FormBtn } from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <TodoForm onSubmit={handleSubmit}>
        <FormTextarea value={message} onChange={handleChange}></FormTextarea>
        <FormBtn type="submit" className="TodoEditor__btn">
          Add
        </FormBtn>
      </TodoForm>
    );
  }
}

export default TodoEditor;
