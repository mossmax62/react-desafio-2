import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
import './Registro.css';
const Registro = () => {
    const [error, setError] = useState(false)
    return (
        <>
<div className="d-flex justify-content-center registro">
          <SocialButton icono="facebook"></SocialButton>
          <SocialButton icono="twitter"></SocialButton>
          <SocialButton icono="instagram"></SocialButton>
     </div>
    <Formulario setError={setError} ></Formulario>
   {error? <Alert color="alert alert-danger" message={"No puede estar vacio"}></Alert>: null}

   {!error? <Alert color="alert alert-success" message={"Registro OK"}></Alert>: null}
   </>
    )
    };
export default Registro;