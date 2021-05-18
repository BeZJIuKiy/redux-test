import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ChangeWorkAction } from '../store/reducers/manReducer';

export const Man = () => {
	const workers = useSelector(state => state.man.workers);
	const dispatch = useDispatch();
	const [isWorkChange, setWorkChange] = useState(-1)

	useEffect(() => {
		workers.map((worker, i) => {
			const { work } = worker;
			dispatch(ChangeWorkAction(work.company, i));
		})
	}, [isWorkChange]);

	return (
		<div>
			{workers.map(({ name, age, work, id }, i) =>
				<div key={id}>
					<div>Мое имя: {name}</div>
					<div>Мой возраст: {age}</div>
					<div
						onClick={() => {
							dispatch(ChangeWorkAction("My New Work!", i));
							setWorkChange(i);
						}}
						style={{ cursor: "pointer" }}
					>
						Моя работа: {work.company}
					</div>
					<div>Моя зарплата: ${work.price}</div>
					<br />
				</div>
			)}

		</div>
	);
};
