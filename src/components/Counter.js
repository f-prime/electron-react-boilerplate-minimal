import React from 'reactn';
import { useGlobal } from 'reactn'; 

export default function Counter() {
    
    const [number, setNumber] = useGlobal("number");
    
    return (
        <button onClick={() => setNumber(number + 1)}>
            { number }
        </button>
    );
}

