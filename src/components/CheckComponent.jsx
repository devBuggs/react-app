import { useState } from 'react';
import '../App.css';


const Checkboxes = () => {
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    const receivedData = [{ value: "Gift 🎁" }, { value: "Food 🥗" }, { value: "Cash 💸" }, { value: "Blessings 🎅" }];

    const handleCheckboxChange = (data) => {
        const isChecked = checkedCheckboxes.some(checkedCheckbox => checkedCheckbox.value === data.value)
        if (isChecked) {
            setCheckedCheckboxes(
                checkedCheckboxes.filter(
                    (checkedCheckbox) => checkedCheckbox.value !== data.value
                )
            );
        } else {
            setCheckedCheckboxes(checkedCheckboxes.concat(data));
            // setCheckAll(false)
        }
    };
    console.log("checkedCheckboxes Data : ", checkedCheckboxes);

    const handleCheckAll = (e) => {
        const { name, checked } = e.target;
        console.log(name, checked, "fjffjf")
        if (checked !== true) {
            console.log("checkAll" + checked + " values");
            setCheckedCheckboxes([])
        } else {
            console.log("checkAll" + checked + "values");
            setCheckedCheckboxes(receivedData)
        }
    }

    const filterByReference = (arr1, arr2) => {
        let res = [];
        res = arr1.filter(el => {
            return !arr2.find(element => {
                return element.value === el.value;
            });
        });
        return res;
    }

    return (
        <>
            <div className=" w3-content">
                <h3 className='w3-center'>What do you want from <span className="w3-text-red">Santa</span> 🎅!</h3>
                <hr />
                <div className="w3-panel w3-card-4 w3-third w3-round-large w3-left">
                    <p className="w3-pale-red  w3-padding-small" key="selectall" >
                        <input
                            type="checkbox"
                            className='w3-check cursor'
                            name='allCheck'
                            onChange={handleCheckAll}
                            checked={checkedCheckboxes.length === receivedData.length || false}
                        />
                        <label className='w3-margin-left w3-large'>Select all Options</label>
                    </p>
                    <hr />
                    {
                        checkedCheckboxes.length > 0 ? (
                            checkedCheckboxes.map((item, index) => (
                                <p className="w3-pale-green w3-round w3-padding-small w3-animate-right" key={index}>
                                    <input
                                        className='w3-check'
                                        key={`mycb-${index}`}
                                        value={item.value}
                                        type="checkbox"
                                        checked={checkedCheckboxes.some(checkedCheckbox => checkedCheckbox.value === item.value)}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                    <label className='w3-margin-left medium'>{item.value} -checked</label>
                                </p>
                            ))
                        ) : null
                    }
                    {
                        filterByReference(receivedData, checkedCheckboxes).map((item, index) => (
                            <p className="w3-pale-green w3-round w3-padding-small w3-animate-bottom" key={index}>
                                <input
                                    className='w3-check'
                                    key={`mycb-${index}`}
                                    value={item.value}
                                    type="checkbox"
                                    checked={checkedCheckboxes.some(checkedCheckbox => checkedCheckbox.value === item.value)}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                <label className='w3-margin-left medium'>{item.value} </label>
                            </p>
                        ))
                    }

                </div>
                <div className="w3-panel zoom w3-card-4 w3-third w3-margin-left w3-round-large w3-right">
                    <h3 className="w3-text-gray">Selected options</h3>
                    {
                        checkedCheckboxes.length > 0 ? checkedCheckboxes.map((item, i) => <p key={i}>#{i}. {item.value}</p>) : <p className="w3-large">"No items selected!"</p>
                    }
                </div>
            </div>
        </>
    );
};

export default Checkboxes;
