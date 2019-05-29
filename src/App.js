import React, { Component } from 'react';
import { TodoList } from './components/TodoComponents/TodoList';

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
			]
		};
	}

	render() {
		const { todo } = this.state;

		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList todoList={todo} />
			</div>
		);
	}
}

export default App;
