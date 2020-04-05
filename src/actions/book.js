import database from '../firebase/firebase';

const addBook = ({
    titre = '',
    auteur = '',
    niveau = '',
    status = '',
    date = 0,
    idStudent= ''
} = {}) =>
    ({
        type: 'ADD_BOOK',
        payload:
        {
            titre,
            auteur,
            niveau,
            status,
            date,
            idStudent
        }
    });

export const startAddBook = (bookData = {}) => {
    return (dispatch) => {
        const {
            titre = '',
            auteur = '',
            niveau = '',
            status = '',
            date = 0,
            idStudent=''
        } = bookData;

        const book = { titre, auteur, niveau, status, date, idStudent };

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

export const setBook = (expenses) => ({
    type: 'SET_BOOK',
    expenses
});


export const startSetBook = () => {
    return (dispatch) => {
        return database.ref('users/books').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setBook(expenses));
        });
    };
}