import React from 'react'
import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
const addBook = ({
    titre = '',
    auteur = '',
    niveau = '',
    status = '',
    date = 0
} = {}) =>
    ({
        type: 'ADD_BOOK',
        payload:
        {
            titre,
            auteur,
            niveau,
            status,
            date
        }
    });

export const startAddBook = (bookData = {}) => {
    return (dispatch) => {
        const {
            titre = '',
            auteur = '',
            niveau = '',
            status = '',
            date = 0
        } = bookData;

        const book = { titre, auteur, niveau, status, date };

        return database.ref('users/books').push(book).then((ref) => {
            dispatch(addBook({
                id: ref.key,
                ...book
            }));
            console.log('book added');
        });

    };
};



// REMOVE_EXPENSE
const removeBook = (id) => ({
    type: "REMOVE_BOOK",
    id
});

export const startRemoveBook = (id) => {
    return (dispatch) => {
        return database.ref(`users/books/${id}`).remove().then(() => {
            dispatch(removeBook(id));
        });
    };
};


// EDIT_EXPENSE
const editBook = (id, updates) =>
    ({
        type: "EDIT_EXPENSE",
        id,
        updates
    });

export const startEditBook = (id, updates) => {
    return (dispatch) => {
        return database.ref(`users/books/${id}`).update(updates).then(() => {
            dispatch(editBook(id, updates));
        });
    };
};


// SET_TEXT_FILTER
const setTitleFilter = (text = '') => ({
    type: 'SET_TITLE_FILTER',
    text
});
//SET_AUTEUR_FILTER
const setAuteurFilter = (auteur='') => ({
    type : 'SET_AUTEUR_FILTER',
    auteur
})
// SET_NIVEAU_FILTER
const setNiveauFilter = (niveau='') => ({
    type: "SET_NIVEAU_FILTERS",
    niveau
})
//SET_STATUS_FILTER
const setStatusFilter = (status='') => ({
    type: "SET_STATUS_FILTER",
    status
})
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const bookReducerDefault = [];

const filterReducerDefault = {
    text: '',
    auteur: '',
    niveau: '',
    status: '',
    sortBy: 'date',
}

const bookReducer = (state = bookReducerDefault, action) => {
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

        default:
            return state;
    }
};

const filterBookReducer = (state = filterReducerDefault, action) => {
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


//a test to show if the filter can see the elements existing in the expenses
const getVisibleBooks = (expenses, {  text,auteur,niveau,status,sortBy,date }) => {

    return expenses.filter((expense) => {
            const textMatch = expense.nom.toLowerCase().includes(text.toLowerCase());
            const auteurMatch = expense.auteur.toLowerCase().includes(auteur.toLowerCase());
            const niveauMatch = expense.niveau.toLowerCase().includes(niveau.toLowerCase());
            const statusMatch = expense.status.toLowerCase().includes(status.toLowerCase());
            
            return textMatch && auteurMatch && niveauMatch && statusMatch;
        });

};
