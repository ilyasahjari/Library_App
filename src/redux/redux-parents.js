import React from 'react';
import './App.css';

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addTeacher = ({
    nom = '',
    prenom = '',
    sex = ''
} = {}) =>
    ({
        type: 'ADD_TEACHER',
        payload:
        {
            id: uuid(),
            nom,
            prenom,
            sex
        }
    });


// REMOVE_EXPENSE
const removeTeacher = (id) => ({
    type: "REMOVE_TEACHER",
    id
});

// EDIT_EXPENSE
const editTeacher = (id, updates) =>
    ({
        type: "EDIT_TEACHER",
        id,
        updates
    });

// SET_TEXT_FILTER
const setTextFiltertTeacher = (text = '') => ({
    type: 'SET_TEXT_FILTER_TEACHER',
    text
});



const teacherReducerDefault = [];

const filterReducerDefault = {
    text: ''
}

const teacherReducer = (state = teacherReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_TEACHER':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_TEACHER':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_TEACHER':
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
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        teachers: teacherReducer,
        teacherfilters: teacherfilterReducer
    })
);


//a test to show if the filter can see the elements existing in the expenses
const getVisibleExpenses = (expenses, { text }) => {

    const filteredExpenses =
        expenses.filter((expense) => {
            return expense.nom.toLowerCase().includes(text.toLowerCase());

        });
};


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addTeacher({ nom: "hmad", prenom: "ahjari", sexe: "F"}));
const expenseTwo = store.dispatch(addTeacher({ nom: "salim", prenom: "ahjari", sexe: "M" }));

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
            sexe : 'M'

        }],
    filters: {
        text: 'rent',
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
