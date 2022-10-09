import { Component } from 'react';
import './TodoEditor.css';

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
      <form className="TodoEditor" onSubmit={handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__btn">
          Add
        </button>
      </form>
    );
  }
}

export default TodoEditor;
