import uuid from 'uuid';
import database from '../firebase/firebase';

export const addParent = ({
    id = '',
    nom = '',
    prenom = '',
    sexe = ''
} = {}) =>
    ({
        type: 'ADD_PARENT',
        payload:
        {
            id,
            nom,
            prenom,
            sexe
        }
    });

export const startAddParent = (userData = {}) => {
    return (dispatch) => {
        const {
            nom = '',
            prenom = '',
            sexe = ''
        } = userData;

        const user = { nom, prenom, sexe };

        return database.ref('users/parents').push(user).then((ref) => {
            dispatch(addParent({
                id: ref.key,
                ...user
            }));
        });

    };
};

// REMOVE_EXPENSE
export const removeParent = (id) => ({
    type: "REMOVE_PARENT",
    id
});

export const startRemoveParent = (id) => {
    return (dispatch) => {
        return database.ref(`users/parents/${id}`).remove().then(() => {
            dispatch(removeParent(id));
        });
    };
};


// EDIT_EXPENSE
export const editParent = (id, updates) =>
    ({
        type: "EDIT_PARENT",
        id,
        updates
    });

export const startEditParent = (id, updates) => {
    return (dispatch) => {
        return database.ref(`users/parents/${id}`).update(updates).then(() => {
            dispatch(editParent(id, updates));
        });
    };
};

export const setParent = (payload) => ({
    type: 'SET_PARENT',
    payload
});

export const startSetParent = () => {
    return (dispatch) => {
        return database.ref('users/parents').once('value').then((snapshot) => {
            const payload = [];

            snapshot.forEach((childSnapshot) => {
                payload.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setParent(payload));
        });
    };
};

