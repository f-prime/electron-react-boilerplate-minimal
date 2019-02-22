// Action Types

const INCREMENT = "INCREMENT";

// Initial State

const initialState = {
    number:0
};

// Root Reducer

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return increment_reducer(state, action);
        default:
            return state;
    }
}

// actions

export function increment_action(payload) {
    return {type:INCREMENT, payload:payload};
}

// reducers

function increment_reducer(state, action) {
    return {...state, number:state.number + 1}; 
}
