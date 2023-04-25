import React, { useState } from "react";

const FORM = () => {
	const [todo, setTodo] = useState({ title: "", desc: "" });
	const { title, desc } = todo;

	const handeleChange = (event) => {
		const name = event.target.name;
		setTodo((oldTodo) => {
			return { ...oldTodo, [name]: event.target.value };
		});
	};
	const handelSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={handelSubmit}>
			<div>
				<label className="p" htmlFor="title">
					Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={handeleChange}
				/>
			</div>
			<div>
				<label className="p" htmlFor="desc">
					Desc
				</label>
				<textarea
					type="text"
					id="desc"
					name="desc"
					value={desc}
					onChange={handeleChange}
				/>
			</div>
			<button type="submit">Add todo</button>
		</form>
	);
};

export default FORM;
