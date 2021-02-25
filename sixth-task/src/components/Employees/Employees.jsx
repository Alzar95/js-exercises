import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Employees.css';

const Employees = () => {
    const [dataEmployees, setDataEmployees] = useState([]);
    const [dataAddEmployee, setDataAddEmployee] = useState('');

    useEffect(async () => {
        const result = await axios('https://reqres.in/api/users?per_page=12');
        let arrayNameEmployees = [];

        result.data.data.map(item => {
            return arrayNameEmployees.push(item.first_name);
        });

        setDataEmployees(arrayNameEmployees);
    }, []);

    const changeAddInputEmploy = (event) => {
        const newEmployee = event.target.value;

        setDataAddEmployee(newEmployee);
    };

    const handleAddEmploy = () => {
        setDataEmployees(data => [...data, dataAddEmployee]);
        setDataAddEmployee('');
    };

    const handleRemoveItemEmploy = (indexEmployName) => {
        setDataEmployees(dataEmployees.filter((item, index) => index !== indexEmployName));
    };

    return (
        <div className="employees">
            <span className="employees-title">Employees</span>
            <div className="employees-add">
                <input className="employees-add-input" type="text" value={dataAddEmployee} onChange={changeAddInputEmploy}/>
                <button className="employees-add-btn" disabled={!dataAddEmployee} onClick={handleAddEmploy}>Add</button>
            </div>
            <ul className="employees-list">
                {
                    dataEmployees.map((item, index) => {
                        return <li key={item + index} className="employees-list-item">
                            <span className="employees-list-item-text-name">{item}</span>
                            <button className="employees-list-item-btn-remove" onClick={() => handleRemoveItemEmploy(index)}>
                                Delete
                            </button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
};

export default Employees;
