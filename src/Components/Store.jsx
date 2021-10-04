import {createStore, compose, applyMiddleware} from "redux"
import ExamsReducer from "./ExamsReducer"
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from "./FIREBASE/Config"

const Store = createStore(ExamsReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    )
    
)

export default Store