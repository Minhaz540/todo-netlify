import React from "react";
import SingleTodo from "./SingleTodo";

function Todos({ todos, deleteTodo, changeStatus }) {
	if (todos.length === 0) {
		return (
			<div className="d-flex my-2 justify-content-between bg-light p-2">
				<p className="m-auto mb-0 p-2">Currently, no todo available right now.</p>
			</div>
		);
	}
	return (
		<div className="my-2">
			{todos.map((todo, index) => (
				<SingleTodo
					key={todo.id}
					id={todo.id}
					index={index}
					text={todo.text}
					status={todo.status}
					deleteTodo={deleteTodo}
					changeStatus={changeStatus}
					created={todo.created.toDateString()}
				/>
			))}
		</div>
	);
}

export default Todos;
