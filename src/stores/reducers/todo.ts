
interface IInitialState {
	id: number;
	name: string;
}

type TAction = {
	type: string;
	payload?: any;
}

const initialState: IInitialState[] = [];

const todoReducer = (state = initialState, action: TAction) => {
	const { type, payload } = action;

	switch (type) {
		case 'CREATE_TUTORIAL':
			return [...state, payload];

		case 'GET_ALL':
			return payload;

		case 'UPDATE_TUTORIAL':
			return state.map((tutorial) => {
				if (tutorial.id === payload.id) {
					return {
						...tutorial,
						...payload,
					};
				} else {
					return tutorial;
				}
			});

		default:
			return state;
	}
};

export default todoReducer;