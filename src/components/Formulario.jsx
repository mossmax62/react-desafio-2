import { useState } from "react";
import { Alert } from "react-bootstrap";
import './Formulario.css';
const Formulario = ({setError}) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    /* const [error, setError] = useState(false); */

    const ValidarQueNoEsteVacio = (event) => {
        event.preventDefault();
        if(nombre === ""){
            console.log("No puede estar vacio");
            setError(true);
            return false;
        }
        console.log("Todo bien");
        setError(false);
        return true;
    }


    return (
        <>
        {/* <h1>{nombre}</h1> */}
        <form onSubmit={ValidarQueNoEsteVacio} className="form">
            {/* {error && <Alert variant="alert alert-danger"> No puede estar vacio</Alert>} */}
            <h1>Formulario</h1>
            <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" 
            onChange={(event)=>{setNombre(event.target.value)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <button type="submit" className="btn btn-primary" 
            >Submit</button>
        </form>
        </>
        )
}
export default Formulario;