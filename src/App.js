import React, { Component } from 'react';
import { TodoList } from './components/TodoComponents/TodoList';
import { TodoForm } from './components/TodoComponents/TodoForm';

/**
 * you will need a place to store your state in this component.
  design `App` to be the parent component of your application.
  this component is going to take care of state, and any change handlers you need to work with your state
 */

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [
				{
					task: 'Organize Garage',
					id: Date(Date.now()),
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: Date.now(),
					completed: false
				}
			],
			value: ''
		};
	}

	handleOnchange = evt => {
		const inputValue = evt.target.value;
		this.setState(prevState => ({
			value: inputValue
		}));
	};

	addNewTodo = () => {
		// Get previous todo array state
		const { todo } = this.state;

		// Get user input
		const { value } = this.state;

		// newly created todo (object)
		const newTodo = {
			task: value,
			id: Date(Date.now()),
			completed: false
		};

		// add newly created todo to existing list
		const newTodoList = todo.concat(newTodo);

		this.setState(prevState => ({
			todo: newTodoList,
			value: ''
		}));
	};

	handleAddTodoClick = () => {
		// Add new todo list
		this.addNewTodo();
	};

	render() {
		const { todo, value } = this.state;

		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList todoList={todo} />
				<TodoForm
					todoList={todo}
					value={value}
					handleOnchange={this.handleOnchange}
					handleAddTodoClick={this.handleAddTodoClick}
				/>
			</div>
		);
	}
}

export default App;
