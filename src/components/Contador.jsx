import { useState } from "react";
const Contador = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Juan");
    return (
        <div>
            <h1>Contador</h1>
            
            <button onClick={()=>{setCount(count + 1)}}>Cuenta: {count}</button>
        </div>
    )
}
export default Contador;

