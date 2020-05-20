const filterReducerDefault = {
    text: '',
    auteur: '',
    niveau: '',
    status: '',
    sortBy: 'date',
    date: undefined,
}

export default (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: "date"
            };

        case 'SET_AUTEUR_FILTER':
            return {
                ...state,
                auteur: action.auteur
            }
        case 'SET_STATUS_FILTER':
            return {
                ...state,
                status: action.status
            }
        case 'SET_NIVEAU_FILTER':
            return {
                ...state,
                niveau: action.niveau
            }       

        default:
            return state;
    }
}
