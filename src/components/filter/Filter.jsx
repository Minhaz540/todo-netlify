import React from "react";

function Filter({ handleFilter, filter }) {
	return (
		<select
			className="form-select"
			aria-label="Default select example"
			value={filter}
			onChange={(e) => handleFilter(e.target.value)}
		>
			<option value="all">All</option>
			<option value="pending">pending</option>
			<option value="completed">Completed</option>
		</select>
	);
}

export default Filter;
