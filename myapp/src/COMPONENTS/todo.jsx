import React from "react";
import "./todo.css";

const TODO = (props) => {
	const { title, desc, id } = props.todo;
	return (
		<article>
			<div>
				<h3 className="h1">{title}</h3>
				<p className="p">{desc}</p>
			</div>
			<div>
				<button>
					<i className="fa fa-trash"></i>
				</button>
			</div>
		</article>
	);
};

export default TODO;
