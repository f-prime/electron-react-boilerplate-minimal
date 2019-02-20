import React from 'react';
import { increment_action } from "../reducers/";
import { ReactReduxContext } from 'react-redux'

export default class Counter extends React.Component {
    render() {
        return (
           <ReactReduxContext.Consumer>
                {(store) => (
                    <button onClick={() => store.store.dispatch(increment_action())}>
                        {store.storeState.number}
                    </button>
                )}
            </ReactReduxContext.Consumer>
        );
    }
}

