const parentReducerDefault = [];

export default (state = parentReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_PARENT':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_PARENT':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_PARENT':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    }; else {
                    return expense;
                }
            });
        case 'SET_PARENT':
            return action.payload;

        default:
            return state;
    }
};