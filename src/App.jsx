import Alert from "./components/Alert"
import Formulario from "./components/Formulario"
import Registro from "./components/Registro"
import SocialButton from "./components/SocialButton"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
function App() {
  const [alert, setAlert] = useState({
    message: "",
    color: ""
  })
  const [error, setError] = useState(false)
  return (
    <>
      
        <Row>
        <Col></Col>
          <Col xs={6}>
        <Registro>
          <h1>Registro de usuarios</h1>

        </Registro>
        </Col>
        <Col></Col>
        </Row>
      
    </>
  )
}

export default App
