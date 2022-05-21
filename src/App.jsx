import React from "react";
import shortId from "shortid";
import "./App.css";
import todos from "./data/todos";
import Todos from "./components/todos/Todos";
import Filter from "./components/filter/Filter";
import CreateTodo from "./components/createTodo/CreateTodo";

class App extends React.Component {
	state = {
		allTodos: todos,
		todos: todos,
		filter: "all",
	};

	createTodo = (todo) => {
		todo.id = shortId.generate();
		todo.status = "pending";
		todo.created = new Date();
		this.setState({
			todos: [todo, ...this.state.todos],
			allTodos: [todo, ...this.state.allTodos],
			filter: "all",
		});
	};

	deleteTodo = (id) => {
		const todos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos, allTodos: todos });
	};

	handleFilter = (filter) => {
		if (filter === "completed") {
			const todos = this.state.allTodos.filter((todo) => todo.status === "completed");
			this.setState({ todos, filter });
		} else if (filter === "pending") {
			const todos = this.state.allTodos.filter((todo) => todo.status === "pending");
			this.setState({ todos, filter });
		} else {
			this.setState({ todos: this.state.allTodos, filter });
		}
	};

	changeStatus = (id) => {
		const todo = this.state.todos.find((todo) => todo.id === id);
		if (todo.status === "completed") {
			todo.status = "pending";
		} else {
			todo.status = "completed";
		}
		this.setState({ todos: this.state.todos });
	};

	render() {
		return (
			<div className="container">
				<h2 className="text-center my-4">TODOS APPLICATION</h2>
				<div className="row">
					<div className="col-10">
						<CreateTodo createTodo={this.createTodo} />
					</div>
					<div className="col-2 ps-0">
						<Filter filter={this.state.filter} handleFilter={this.handleFilter} />
					</div>
				</div>
				<br />
				<Todos
					todos={this.state.todos}
					deleteTodo={this.deleteTodo}
					changeStatus={this.changeStatus}
				/>
			</div>
		);
	}
}

export default App;
