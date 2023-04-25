import React from "react";

import "./home.css";

import TODOS from "./todos";
import FORM from "./form";

const dummyTodos = [
	{
		id: 1,
		title: "todo title 1",
		desc: "todo 1 description",
	},
	{
		id: 2,
		title: "todo title 2",
		desc: "todo 2 description",
	},
];

const HOME = () => {
	return (
		<div className="container">
			<h1 className="h1">Todo app</h1>
			<FORM />
			{/*GET ACCESS FORM TODOS COMPONENTS*/}
			{/*Take a attribute cald "todos" and puss "dummy todos"*/}
			<TODOS todos={dummyTodos} />
		</div>
	);
};

export default HOME;
