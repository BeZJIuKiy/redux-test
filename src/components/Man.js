import React from 'react';
import {useSelector} from "react-redux";

export const Man = () => {
	const {name, age, work} = useSelector(state => state.man)

	return (
		<div>
			<div>Мое имя: {name}</div>
			<div>Мой возраст: {age}</div>
			<div>Моя работа: {work.company}</div>
			<div>Моя зарплата: ${work.price}</div>
		</div>
	);
};
