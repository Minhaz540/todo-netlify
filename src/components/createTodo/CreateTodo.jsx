import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class CreateTodo extends Component {
	state = {
		text: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createTodo(this.state);
		event.target.reset();
		this.setState({ text: "" });
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="d-flex">
				<input
					name="text"
					value={this.state.text}
					onChange={this.handleChange}
					required
					className="form-control"
					type="text"
					placeholder="Enter the todo title"
				/>
				<button type="submit" className="btn btn-primary ms-2" title="Add new todo">
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</form>
		);
	}
}

export default CreateTodo;
