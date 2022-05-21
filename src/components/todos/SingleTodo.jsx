import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function SingleTodo({ index, text, status, id, deleteTodo, created, changeStatus }) {
	return (
		<div
			title={text}
			className="d-flex my-2 align-items-center justify-content-between bg-light py-2 px-3"
		>
			<div className="d-flex align-items-center">
				<span className="rounded bg-info text-light d-inline-block px-3 py-2 me-2">
					{index + 1}
				</span>
				<div className="d-inline-flex flex-column">
					<span className="todo-text">{text}</span>
					<span className="form-text">{created}</span>
				</div>
			</div>
			<div>
				<button
					title={status}
					className={status === "completed" ? "btn btn-success" : "btn btn-warning"}
					onClick={() => changeStatus(id)}
				>
					{status}
				</button>
				<button
					title="Delete this todo"
					className="btn btn-danger ms-2"
					onClick={() => deleteTodo(id)}
				>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</div>
		</div>
	);
}

export default SingleTodo;
