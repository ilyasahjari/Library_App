import uuid from 'uuid';
import database from '../firebase/firebase';
import { setStartDate } from './filters';
import { startSetParent } from './parent';
import { startAddPayement, addPayement } from './payement';




//User add locally
export const addStudent = ({
    id = '',
    nom = '',
    prenom = '',
    classe = '',
    date = 0,
    email = '',
    idParent1 = '',
    idParent2 = ''
} = {}) =>
    ({
        type: 'ADD_EXPENSE',
        payload:
        {
            id,
            nom,
            prenom,
            classe,
            date,
            email,
            idParent1,
            idParent2
        }
    });

//user add for firebase 
// export const addBook = (user)=>({
//     type: 'ADD_EXPENSE',
//     user
// });

//user add firebase

export const startAddStudent = (userData = {}) => {
    return (dispatch) => {
        const {
            nom = '',
            prenom = '',
            classe = '',
            date = 0,
            email ='',
            idParent1 = '',
            idParent2 = ''
        } = userData;

        const user = { nom, prenom, classe, date, email, idParent1, idParent2 };

        let idStudent = ""

        database.ref('users/students').push(user).then((ref) => {
            dispatch(addStudent({
                id: ref.key,
                ...user
            }));
            idStudent= ref.key;
            //dispatch(startAddPayement({idStudent}));   
        });
    };
};
// REMOVE_EXPENSE
export const removeStudent = (id) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveStudent = (id) => {
    return (dispatch) => {
        return database.ref(`users/students/${id}`).remove().then(() => {
            dispatch(removeStudent(id));
        });
    };
};

// EDIT_EXPENSE
export const editStudent = (id, updates) =>
    ({
        type: "EDIT_EXPENSE",
        id,
        updates
    });

export const startEditStudent = (id, updates) => {
    return (dispatch) => {
        return database.ref(`users/students/${id}`).update(updates).then(() => {
            dispatch(editStudent(id, updates));
        });
        // window.location.reload(false);

    };
};


export const setStudent = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetStudent = () => {
    return (dispatch) => {
        return database.ref('users/students').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setStudent(expenses));
        });
    };
};

export const setSetStudentTeacher = () =>{
    startSetStudent()
    startSetParent()
}

