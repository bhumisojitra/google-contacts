import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { lodingAction, lodingComplet } from "./lodingAction"

export const addRec = (data) => {
    return {
        type: 'AddUser',
        payload: data
    }
}

const error = (err) => {
    return {
        type: "error",
        payload: err
    }
}

const singleRec = (id) => {

    return {
        type: "singleData",
        payload: id
    }
}

export const contactAsync = (addContact) => {
    return async (dispatch) => {

        dispatch(lodingAction());

        try {
            await setDoc(doc(db, "users", `${addContact.id}`), addContact);

            dispatch(lodingComplet())
            dispatch(getContact());
        }
        catch (err) {
            dispatch(error(err));
        }
    }
}

export const getContact = () => {
    return async (dispatch) => {
        dispatch(lodingAction());

        try {
            let users = [];

            const res = await getDocs(collection(db, "users"));

            users = res.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                };
            });

            console.log("users :", users);

            dispatch(lodingComplet());
            dispatch(addRec(users));

        }
        catch (err) {
            console.log("err", err);
            dispatch(error(err));
        }
    }
}

export const singleAsncy = (id) => {
    return async (dispatch) => {
        dispatch(lodingAction());

        try {   
            const singleDoc = await getDoc(doc(db, "users", `${id}`))


            console.log("singleDocc : ", singleDoc.data());

            dispatch(lodingComplet());
            dispatch(singleRec(singleDoc.data()))

        }
        catch (err) {
            dispatch(error(err))
        }
    }
}

export const updateAsncy = (addContact) => {
    return async (dispatch) => {
        dispatch(lodingAction());
        try {
            await setDoc(doc(db, "users", `${addContact.id}`), addContact)

            dispatch(lodingComplet());
            dispatch(getContact())
        }
        catch (err) {
            dispatch(error(err))
        }
    }
}

export const deleteAsncy = (id) => {
    return async (dispatch) => {
        dispatch(lodingAction());
        try {
            await deleteDoc(doc(db, "users", `${id}`))
            dispatch(lodingComplet());
            dispatch(getContact())
        }
        catch (err) {
            dispatch(error(err))
        }
    }
}