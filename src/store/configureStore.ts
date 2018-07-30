import { applyMiddleware, compose, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {merchantsReducer} from '../reducers'
import { StoreState } from '../types/index'

const configureStore = (preloadedState:StoreState) => {
    const store = createStore(
        merchantsReducer,
        preloadedState,
        compose(applyMiddleware(thunk, createLogger()))
    )
    return store
}

export default configureStore