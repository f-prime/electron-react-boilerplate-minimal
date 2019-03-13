import React from "reactn";
import { setGlobal } from 'reactn';
import Home from "./pages/Home";
import { hot } from "react-hot-loader";

setGlobal({
    number:1
});

function App() {
    return (
        <Home/>
    );
}

export default hot(module)(App); 
