import React, { useState, useEffect } from "react";
import 'w3-css';


const userData = [{name:'Gift'}, {name:'Party'}, {name:'Food'}];

const UiComponent = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(userData);
		console.log('saving user data..')
	}, []);

	
	const handleOnChange = (e, key) => {
		const {name, checked} = e.target;
		if(name === "allSelect"){
			//
			let tempItem = users.map( () => { return {...users, isChecked: checked}} );
			setUsers(tempItem);
		}else{
			let tempItem = users.map((item) => item.name === name ? {...users, isChecked: checked } : item );
			setUsers(tempItem);
		}
		if(users.includes(key)){
			let array = [...users ]
			
		}
	}

	console.log("Checked items: ", users)
	return (
		<div align="center">
			<h3>Ui Component</h3>
			<hr />
			<>
				<form className="w3-container w3-third w3-card-4">
					<p >
						<input className="w3-check" name="allSelect" type="checkbox" checked={users.map((item) => item?.isChecked !== true).length < 0} onChange={handleOnChange} />
						<label className="w3-margin-left">Select All</label>
					</p>
					<hr />
					{
						users.map((item, i) => {
							return (
								<p className="w3-panel" key={i}>
									<input type="checkbox" className="w3-check" name={item.name}  onChange={handleOnChange(item.name)} checked={item.isChecked || false} />
									<label className="w3-margin-left">Item #{i} - {item.name} </label>
								</p>
							)
						})
					}

				</form>
			</>
			<>
				<ul className=" w3-quarter" id="id_dispaly_case">
					<p>Selected Inputs</p>
					{
						users.map((item, i) => item === true ? (
							<p key={i}> {item.name} </p>
						) : null)

						// users.filter((item, i) => item === true ? (<p key={i}>{item.name}</p>) : null )
					}
				</ul>
			</>
		</div>
	)
}
export default UiComponent;