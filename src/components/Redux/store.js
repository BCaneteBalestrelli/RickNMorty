import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

// Conexión a la extensión del navegador "Redux DevTools"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	// Poder hacer peticiones a la API
	composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;