import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
const Registro = () => {
    const [error, setError] = useState(false)
    return (
        <>

    <Formulario setError={setError} ></Formulario>
   {error? <Alert color="alert alert-danger" message={"No puede estar vacio"}></Alert>: null}
   {!error? <Alert color="alert alert-success" message={"Registro OK"}></Alert>: null}
   <div className="d-flex justify-content-center">
          <SocialButton icono="facebook"></SocialButton>
          <SocialButton icono="twitter"></SocialButton>
          <SocialButton icono="instagram"></SocialButton>
     </div>
   </>
    )
    };
export default Registro;