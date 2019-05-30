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
					id: Date.now() + Math.random(),
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: Date.now() + Math.random(),
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
		const sanitizeValue = value.toString().trim().length;

		// check if user input value
		if (sanitizeValue > 3) {
			// newly created todo (object)
			const newTodo = {
				task: value,
				id: Date.now() + Math.random(),
				completed: false
			};

			// add newly created todo to existing list
			const newTodoList = todo.concat(newTodo);

			this.setState(prevState => ({
				todo: newTodoList,
				value: ''
			}));
		}
	};

	handleClick = evt => {
		// Get action type
		const actionType = evt.target.dataset.action;
		const todoId = evt.target.dataset.id;

		switch (actionType) {
			case 'add':
				// Add new todo list
				this.addNewTodo();
				break;

			case 'selected':
				this.toggleTodoCompleted(todoId);
				break;

			default:
				this.removeCompletedTodo();
				break;
		}
	};

	toggleTodoCompleted = todoId => {
		// Convert date string to integer
		const todoID = parseFloat(todoId);

		// get all todo
		const { todo } = this.state;

		const newTodo = todo.map(todo => {
			if (todo.id === todoID) {
				todo.completed = !todo.completed;
				return todo;
			} else {
				return todo;
			}
		});

		this.setState(prevState => ({
			todo: newTodo
		}));
	};

	removeCompletedTodo = () => {
		const { todo } = this.state;

		const newTodo = todo.filter(todo => todo.completed !== true);

		this.setState(prevState => ({
			todo: newTodo
		}));
	};

	render() {
		const { todo, value } = this.state;

		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList todoList={todo} handleClick={this.handleClick} />
				<TodoForm todoList={todo} value={value} handleOnchange={this.handleOnchange} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
