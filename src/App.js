import React from "react";
import { hot } from "react-hot-loader";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}

export default hot(module)(App); 
