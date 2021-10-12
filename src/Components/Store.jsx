import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import ExamsReducer from "./ExamsReducer"
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from "./FIREBASE CONFIG/Config"

let allreducers = combineReducers({
    ExamsLocalReducer: ExamsReducer,
    firebase: firebaseReducer

})


const Store = createStore(allreducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    )
    
)

export default Store