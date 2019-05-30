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

	componentDidMount() {
		this.linkStateWithLocalStorage();

		/**
		 *  Add event listener to save state to localStorage when user leaves/refreshes the page
		 *  
		 */
		window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));

		// saves if component has a chance to un mount
		this.saveStateToLocalStorage();
	}

	linkStateWithLocalStorage() {
		// for all items in state
		for (let key in this.state) {
			// if the key exists in localStorage
			if (localStorage.hasOwnProperty(key)) {
				// get the key's value from localStorage
				let value = localStorage.getItem(key);

				// parse the localStorage string and setState
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value });
				}
			}
		}
	}

	saveStateToLocalStorage() {
		// for every item in React state
		for (let key in this.state) {
			// save to localStorage
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	}

	updateInput(key, value) {
		// update react state
		this.setState({ [key]: value });
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
