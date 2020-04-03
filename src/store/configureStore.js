import { createStore, combineReducers, applyMiddleware, compose } from 'redux' 
import studentReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import parentReducer from '../reducers/parent';
import parentFilterReducer from '../reducers/parent-filter'
import bookReducer from '../reducers/book'
import bookFilterReducer from '../reducers/book-filter'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import localstorage from 'redux-persist/lib/storage' 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//     key: 'root',
//     localstorage,
//   }

// export default (initialState = {}, history) => {
//     const persistedReducer = persistReducer(persistConfig, makeRootReducer())
  
//     const store = createStore(
//         combineReducers({
//             expenses: bookReducer,
//             filters: filterReducer
//         }),
//         composeEnhancers(applyMiddleware(thunk))

//     );
//     const persistor = persistStore(store)
  
//     return { store, persistor }
//   }


export default () => {
    const store = createStore(
        combineReducers({
            expenses: studentReducer,
            filters: filterReducer,
            parents: parentReducer,
            parentfilters: parentFilterReducer,
            books: bookReducer,
            booksfilters: bookFilterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))

    );
    return store;
        
}


// const rootReducers = combineReducers({
//     expenses: bookReducer,
//     filters: filterReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducers)

// export default () => {
    
//     const store = createStore(
//         persistedReducer,
//         composeEnhancers(applyMiddleware(thunk))
//     );
//     let persistor = persistStore(store)
//     return { store, persistor };
        
// }

