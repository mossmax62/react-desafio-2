import { useState } from "react";
import { Alert } from "react-bootstrap";
import './Formulario.css';
import { Button } from "react-bootstrap";
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
        <form onSubmit={ValidarQueNoEsteVacio}>
            {/* {error && <Alert variant="alert alert-danger"> No puede estar vacio</Alert>} */}
            <h1>Formulario</h1>
            <div className="mb-3">

            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
            placeholder="Ingrese Nombre" 
            onChange={(event)=>{setNombre(event.target.value)}}/>
            </div>
            <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese EMail" />
            </div>
            <div className="mb-3">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese Password"/>
            </div>
            <div className="mb-3">
            <input type="password" className="form-control" id="exampleInputPassword2" 
            placeholder="Reingrese Password"/>
            </div>
            <div className="d-grid">
            <Button variant="primary"   
            >Registrate</Button>
            </div>
        </form>
        </>
        )
}
export default Formulario;