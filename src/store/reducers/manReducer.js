
export const CHANGE_WORK = "CHANGE_WORK";
export const CHANGE_NAME = "CHANGE_NAME";

const initialState = {
	workers: [
		{
			id: 0,
			name: "Alex",
			age: 20,
			work: {
				company: "Some Company",
				price: 10000,
			}
		},

		{
			id: 1,
			name: "Kalista",
			age: 19,
			work: {
				company: "Another Some Company",
				price: 8000,
			}
		},
	]
}

export const manReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case CHANGE_NAME: {
			const workers = state.workers;
			const num = actions.payload.number;
			workers[num].name = actions.payload.name;
			return {...state, workers }
		}

		case CHANGE_WORK: {
			const workers = state.workers;
			const num = actions.payload.number;
			const work = workers[num].work;
			work.company = actions.payload.company;
			return { ...state, workers };
		}
		default: return state;
	}
}