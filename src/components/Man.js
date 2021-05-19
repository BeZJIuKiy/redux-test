import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

export const Man = () => {
	const workers = useSelector(state => state.man.workers);
	const {ChangeWorkAction, ChangeNameAction} = useActions();


	const [isWorkChange, setWorkChange] = useState(false);
	const [isNameChange, setNameChange] = useState(false);

	useEffect(() => {
		workers.map(( {work}, i ) => {
			ChangeWorkAction(work.company, i);
		})
	}, [isWorkChange]);

	useEffect(() => {
		workers.map(( {name}, i ) => {
			ChangeNameAction(name, i);
		})
	}, [isNameChange]);

	return (
		<div>
			{workers.map(({name, age, work, id}, i) =>
				<div key={id}>
					<div
						onClick={() => {
							ChangeNameAction(prompt("Введите новое имя:"), i);
							setNameChange(!isNameChange);
						}}
						style={{cursor: "pointer"}}
					>
						Мое имя: {name}
					</div>
					<div>Мой возраст: {age}</div>
					<div
						onClick={() => {
							ChangeWorkAction(prompt('Введите название новой компании:'), i);
							setWorkChange(!isWorkChange);
						}}
						style={{cursor: "pointer"}}
					>
						Моя работа: {work.company}
					</div>
					<div>Моя зарплата: ${work.price}</div>
					<br/>
				</div>
			)}
		</div>
	);
};
