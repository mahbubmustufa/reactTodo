import React from "react";
import "./todo.css";

const TODO = (props) => {
	const { title, desc } = props.todo;
	const { id } = props;

	const handleClick = () => {
		props.onRemoveTodo(id);
	};

	return (
		<article>
			<div>
				<h3 className="h1">{title}</h3>
				<p className="p">{desc}</p>
			</div>
			<div>
				<button
					onClick={() => {
						handleClick(id);
					}}
				>
					<i className="fa fa-trash"></i>
				</button>
			</div>
		</article>
	);
};

export default TODO;
