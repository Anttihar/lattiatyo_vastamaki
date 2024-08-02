import { Container, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <Container className="centered">
      <h2 className="headerStyle">Yhteystiedot</h2>
      <p style={{ textAlign: "center" }}>
        Tommi Vastamäki <br />
        Puh. 040 7218470 <br />
        lattiatyovastamaki@gmail.com
      </p>
      <p style={{ textAlign: "center" }}>
        Lattiatyö Vastamäki Oy <br />
        Y-tunnus 3365082-7
      </p>
    </Container>
  )
}

export default Contact