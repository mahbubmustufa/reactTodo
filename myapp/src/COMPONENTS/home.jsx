import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./home.css";

import TODOS from "./todos";
import FORM from "./form";

const HOME = () => {
	const [todos, setTodo] = useState([]);

	const handleAddTodo = (todo) => {
		setTodo((prevTosos) => {
			return [...prevTosos, { id: uuidv4(), todo }];
		});
	};

	const handleRemoveToso = (id) => {
		setTodo((prevTosos) => {
			const filteredTodos = prevTosos.filter((todo) => todo.id !== id);

			return filteredTodos;
		});
	};

	return (
		<div className="container">
			<h1 className="h1">Todo app</h1>
			<FORM onAddTodo={handleAddTodo} />
			{/*GET ACCESS FORM TODOS COMPONENTS*/}
			{/*Take a attribute cald "todos" and puss "dummy todos"*/}
			<TODOS todos={todos} onRemoveTodo={handleRemoveToso} />
		</div>
	);
};

export default HOME;
