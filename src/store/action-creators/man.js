import {CHANGE_NAME, CHANGE_WORK} from "../reducers/manReducer";


export const ChangeWorkAction = (newWork, number) => {
	return ({
		type: CHANGE_WORK,
		payload: {
			company: newWork,
			number: number,
		}
	})
}

export const ChangeNameAction = (newName, number) => {
	return ({
		type: CHANGE_NAME,
		payload: {
			name: newName,
			number: number,
		}
	})
}

