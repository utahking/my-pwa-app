import { applyMiddleware, compose, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {merchantsReducer} from '../reducers'
import epics from '../epics'
import { StoreState } from '../types/index'
import { createEpicMiddleware } from 'redux-observable'

const configureStore = (preloadedState:StoreState) => {
    // const epics = combineEpics(...[merchantsFetchEpic,merchantFetchEpic],)
    const epicMiddleware = createEpicMiddleware()
    const middlewares = [
        thunk,
        createEpicMiddleware(),
        epicMiddleware,
        createLogger()
    ]

    const enhancer = compose(applyMiddleware(...middlewares))

    const store = createStore(
        merchantsReducer,
        preloadedState,
        enhancer
    )
    epicMiddleware.run(epics)
    return store
}

export default configureStore