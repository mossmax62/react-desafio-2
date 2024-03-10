import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
import './Registro.css';
const Registro = () => {
    const [error, setError] = useState(null)
    return (
        <>
        <div className='d-flex flex-column registro'>
<div className="d-flex justify-content-center ">
          <SocialButton icono="facebook"></SocialButton>
          <SocialButton icono="twitter"></SocialButton>
          <SocialButton icono="instagram"></SocialButton>
     </div>
    <Formulario setError={setError} ></Formulario>
   {error===true? <Alert color="alert alert-danger" message={"Corrija los errores"}></Alert>: null}
   {error===false? <Alert color="alert alert-success" message={"Registro OK"}></Alert>: null}
   </div>
   </>
    )
    };
export default Registro;