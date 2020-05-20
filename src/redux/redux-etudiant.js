import React from 'react';
import './App.css';
import Ilyas from './Ilyas';

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addBook = ({
    nom = '',
    prenom = '',
    classe = '',
    date = 0
} = {}) =>
    ({
        type: 'ADD_EXPENSE',
        payload:
        {
            id: uuid(),
            nom,
            prenom,
            classe,
            date
        }
    });


// REMOVE_EXPENSE
const removeBook = (id) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editBook = (id, updates) =>
    ({
        type: "EDIT_EXPENSE",
        id,
        updates
    });

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
})



const bookReducerDefault = [];

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const bookReducer = (state = bookReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
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

const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: "date"
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        expenses: bookReducer,
        filters: filterReducer
    })
);


//a test to show if the filter can see the elements existing in the expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    const filteredExpenses =
        expenses.filter((expense) => {
            const startDateMatch = expense.date >= startDate;
            const endDateMatch = expense.date <= endDate;
            const textMatch = expense.nom.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        });

        
    return filteredExpenses.sort((a, b) => {
        if (sortBy === 'date') {
            return a.date > b.date ? 1 : -1;
        }
        // } else if (sortBy === 'amount') {
        //     return a.amount > b.amount ? -1 : 1;
        // }
    });
};


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addBook({ nom: "good expense", prenom: "23", classe: 2134, date: 1000 }));
const expenseTwo = store.dispatch(addBook({ nom: "great expense", prenom: "3", classe: 214, date: -1000 }));

/*edits related just to the expenses*/
// store.dispatch(removeExpense( expenseOne.payload.id ));
// store.dispatch(editExpense(expenseTwo.payload.id,{amount:100}))


/*---- edits related to filters of expenses-------*/
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())
//store.dispatch(setEndDate(900))
//store.dispatch(setStartDate(-10000))

//just a demo to see how it will be shown
const demoState = {
    expenses:
        [{
            id: '123',
            nom: 'good product',
            prenom: 'hsudhf',
            classe: '9',
            date: 2019

        }],
    filters: {
        text: 'rent',
        sortBy: 'note',
        startDate: undefined,
        endDate: undefined
    }
}




function App() {
    const lastname = "ahjari"
    const firstname = "ilyas"
    const fullname = {
        fname: 'khghdf',
        lname: 'ljhl'

    };
    return (
        <div className="App">
            <Ilyas lname={lastname} fname={firstname} />
        </div>
    );

}

export default App;
