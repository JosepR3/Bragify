// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import rootReducer from "./root-reducer";

// const persistConfig = {
//   key: "apollofy-music-project-client",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware)),
// );

// export const persistor = persistStore(store);

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import CombinedReducers from './root-reducer';

const thunkApplied = applyMiddleware(thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(thunkApplied, devTools) : compose(thunkApplied);
const store = createStore(CombinedReducers, appliedMiddleware);

export default store;
