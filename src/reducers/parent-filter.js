const filterReducerDefault = {
    text: '',
    sexe: ''
}

export default (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER_PARENT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SEXE_FILTER_PARENT':
            return {
                ...state,
                sexe: action.sexe
            }
        default:
            return state;
    }
}