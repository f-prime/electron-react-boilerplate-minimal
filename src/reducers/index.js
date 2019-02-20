const initialState = {
    number:0
};

export default function rootReducer(state=initialState, action) {
    const reducers = {
        INCREMENT:increment_reducer
    };

    if(reducers[action.type]) {
        return Object.assign({}, state, reducers[action.type](state, action));
    }

    return state;
}

// actions

export function increment_action(payload) {
    return {type:"INCREMENT", payload:payload};
}

// reducers

function increment_reducer(state, action) {
    console.log(state.number);
    return {number:state.number + 1}; 
}
