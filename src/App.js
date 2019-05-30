import React, { Component } from 'react';
import { TodoList } from './components/TodoComponents/TodoList';
import { TodoForm } from './components/TodoComponents/TodoForm';
import './App.css';

const initialTodoState = [
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
];

const initialFormState = {
	descriptionValue: '',
	search: ''
};

const initialAppState = {
	todo: initialTodoState,
	form: initialFormState
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialAppState;
	}

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	addNewTodo = () => {
		this.setState(prevState => {
			// Get previous state
			const { todo, form } = prevState;

			const sanitizeValue = form.descriptionValue.toString().trim().length;

			// check if user input value
			if (sanitizeValue >= 3) {
				// newly created todo (object)
				const newTodo = {
					task: form.descriptionValue,
					id: Date.now() + Math.random(),
					completed: false
				};

				return {
					todo: todo.concat(newTodo),
					form: initialFormState
				};
			}
		});
	};

	toggleTodoCompleted = todoId => {
		this.setState(prevState => {
			// Convert date string to integer
			const todoID = parseFloat(todoId);

			// get all todo
			const { todo } = prevState;

			const newTodo = todo.map(todo => {
				if (todo.id === todoID) {
					todo.completed = !todo.completed;
					return todo;
				} else {
					return todo;
				}
			});

			return {
				todo: newTodo
			};
		});
	};

	removeCompletedTodo = () => {
		this.setState(prevState => {
			const { todo } = prevState;

			const newTodo = todo.filter(todo => todo.completed !== true);

			return {
				todo: newTodo
			};
		});
	};

	render() {
		const { todo, form } = this.state;

		return (
			<div className="todo">
				<h2 className="h2">Welcome to your Todo App!</h2>
				<div className="content">
					<section className="todo-list-container">
						<TodoList
							todoList={todo}
							toggleTodoCompleted={this.toggleTodoCompleted}
							inputChange={this.inputChange}
							value={form.search}
						/>
					</section>

					<section className="form-container">
						<TodoForm
							todoList={todo}
							value={form.descriptionValue}
							handleOnchange={this.handleOnchange}
							addNewTodo={this.addNewTodo}
							removeCompletedTodo={this.removeCompletedTodo}
							inputChange={this.inputChange}
						/>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
