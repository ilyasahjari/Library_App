import database from '../firebase/firebase'


export const addPayement = ({
    id = "",
    payementMethod = "",
    caution = 0,
    calculatrice = 0,
    normographe = 0,
    cleUSB = 0,
    commentaire = "",
    date=0,
    status="",
    banque="",
    numCheque="",
    numEnveloppe="",
    idStudent =""
} = {}) => ({
    type: "ADD_PAYEMENT",
    payload: {
        id,
        payementMethod,
        caution,
        calculatrice,
        normographe,
        cleUSB,
        commentaire,
        date,
        status,
        banque,
        numCheque,
        numEnveloppe,
        idStudent
    }
})

export const startAddPayement = (payementData = {}) => {
    return (dispatch) => {
        const {
            payementMethod = "",
            caution = 0,
            calculatrice = 0,
            normographe = 0,
            cleUSB = 0,
            commentaire = "",
            date=0,
            status="",
            banque="",
            numCheque="",
            numEnveloppe="",
            idStudent =""
        } = payementData

        const payement = {
            payementMethod,
            caution,
            calculatrice,
            normographe,
            cleUSB,
            commentaire,
            date,
            status,
            banque,
            numCheque,
            numEnveloppe,
            idStudent
        }
        return database.ref('users/payements').push(payement).then((ref) => {
            dispatch(addPayement({
                id: ref.key,
                ...payement
            }))
        });
    }

}


export const editPayement = (id, updates) =>
    ({
        type: "EDIT_PAYEMENT",
        id,
        updates
    })


export const startEditPayement = (id,updates) => {
    return (dispatch) => {
        return database.ref(`users/payements/${id}`).update(updates).then(() => {
            dispatch(editPayement(id, updates))
        })
    }
}

export const removePayement = (id) =>
    ({
        type: "REMOVE_PAYEMENT",
        id
    })


export const startRemovePayement = (id) => {
    return (dispatch) => {
        return database.ref(`users/payements/${id}`).remove().then(() =>
            dispatch(removePayement(id))
        )
    }

}


export const setPayement = (payload) =>
    ({
        type: 'SET_PAYEMENT',
        payload
    });

export const startSetPayement = () => {
    return (dispatch) => {
        return database.ref('users/payements').once('value').then((snapshot) => {
            const payload = [];

            snapshot.forEach((childSnapshot) => {
                payload.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPayement(payload));
        });
    };
};
