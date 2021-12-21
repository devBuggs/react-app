import React, { useState, useEffect } from 'react';
import 'w3-css';



function TaskLoopComponent() {
	const [data, setData] = useState([
		{ "x": 1, "y": "Data" },
		{ "x": 2, "y": "Data" },
		{ "x": 3, "y": "Data" },
		{ "x": 4, "y": "Data" },
		{ "x": 5, "y": "Data" },
		{ "x": 6, "y": "Data" },
		{ "x": 7, "y": "Data" },
		{ "x": 8, "y": "Data" },
		{ "x": 9, "y": "Data" },
		{ "x": 10, "y": "Data" },
	]);
	const [removedItem, setRemovedItem] = useState({});

	console.log("Initial Data : ", data)

	// debugger
	const updateData = () => {
		let newList = [...data]
		console.log("Slicing array");
		newList = newList.slice(1);
		setData([...newList]);
		console.log("Altered List: ", data);
		
		console.log("Pushing array");
		let lastItem = data[data.length - 1]
		let newItem = { 'x':lastItem.x + 1, 'y': "new List Item" }		
		// setData([...data, newItem]);
		setData([...newList, newItem ]);
		console.log("New List: ", data);
	}

	useEffect(() => {
		const interval = setInterval((data) => {
			updateData();
			console.log("This will run in every 1 sec.");
		}, 1000);
		return () => clearInterval(interval);
	});



	return (
		<>
			<h3 align="center">task ::devBuggs</h3>
			<hr />
			{
				data.length > 0 ? (
					data.map((item, i) => {
						return <p className="w3-panel w3-animate-right w3-pale-green w3-padding-small" key={item.x}>Id: #{item.x} - {item.y}</p>
					})
				) : ''
			}
		</>
	)
}

export default TaskLoopComponent;