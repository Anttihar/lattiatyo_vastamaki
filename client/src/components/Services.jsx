import { Col, Row, Container } from "react-bootstrap"
import { GiCheckMark } from "react-icons/gi"

const Services = () => {
  return (
    <Container>
      <Row>
        <h2 className="headerStyle mb-4">Palveluitamme</h2>
        <Col className="centered">
          <h4 style={{ fontWeight: "300" }}>
            <GiCheckMark style={{ color: "DAA520" }} /> Betonilattiavalut
          </h4>
          <ul style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
            <li>Maanvaraiset lattiat</li>
            <li>Pintalaattojen valut</li>
            <li>Holvivalut</li>
            <li>Kaatovalut</li>
            <li>Kuivasirotepinnoitteet</li>
          </ul>
          <h4 style={{ fontWeight: "300" }}>
            <GiCheckMark style={{ color: "DAA520" }} /> Sementtiliiman hionnat
          </h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Services