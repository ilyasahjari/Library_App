const payementReducerDefault = [];

export default (state = payementReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_PAYEMENT':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_PAYEMENT':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_PAYEMENT':
            return state.map((payement) => {
                if (payement.id === action.id)
                    return {
                        ...payement,
                        ...action.updates
                    }; else {
                    return payement;
     
                }
            });
        case 'SET_PAYEMENT':
            return action.payload;

        default:
            return state;
    }
};