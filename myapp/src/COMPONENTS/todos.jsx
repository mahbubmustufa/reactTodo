import React from "react";
import TODO from "./todo";

const TODOS = (props) => {
	return (
		<section>
			{props.todos.map((todo) => (
				<TODO todo={todo} key={todo.id} />
			))}
		</section>
	);
};

export default TODOS;
