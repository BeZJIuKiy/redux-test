
const CHANGE_WORK = "CHANGE_WORK"

const initialState = {
	name: "Alex",
	age: 20,
	work: {
		company: "SomeCompany",
		price: 10000,
	}
}

export const manReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case CHANGE_WORK: {
			return {...state, work: {company: actions.payload}}
		}
		default: return state;
	}
}

export const ChangeWorkAction = newWork => ({type: CHANGE_WORK, payload: newWork});