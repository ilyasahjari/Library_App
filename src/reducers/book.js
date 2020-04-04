const bookReducerDefault = [];

export default (state = bookReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_BOOK':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_BOOK':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    }; else {
                    return expense;
                }
            });

        case 'SET_BOOK':
            return action.expenses;

        default:
            return state;
    }
};