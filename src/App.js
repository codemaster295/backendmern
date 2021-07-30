import axios from "axios";
import { useEffect, useState } from "react";
import Box from "./Box";

export default function App() {
	const [fbData, setFbData] = useState("");
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5050")
			.then((d) => {
				setFbData(d.data);
			})
			.catch((Err) => {
				console.log(Err);
			});
	}, []);

	const submitForm = (e) => {
		const newData = {
			username: name,
			title: title,
			description: desc,
		};

		console.log(newData);
		setData(newData);

		fetch("http://localhost:5050", {
			method: "POST",
			body: JSON.stringify(newData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => response.json(data))
			.then((json) => console.log(json));
		console.log(data);
	};
	return (
		<>
			<form className="d-flex flex-column col-4 mx-auto justify-content-center">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<label
					htmlFor="title"
					onChange={(e) => {
						setName(e.target.value);
					}}
				>
					Title
				</label>
				<input
					type="text"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<label htmlFor="description">Description</label>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				></textarea>
				<button onClick={submitForm}> click me</button>
			</form>
			{fbData &&
				fbData.map((props, i) => (
					<Box
						title={fbData[i].title}
						description={fbData[i].description}
						username={fbData[i].username}
						key={fbData[i]._id}
					/>
				))}
		</>
	);
}
