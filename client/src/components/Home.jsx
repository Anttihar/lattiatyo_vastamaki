import { Button, Col, Row, Container, Stack } from "react-bootstrap"
import Contact from "./Contact"
import Services from "./Services"
import { Link } from "react-router-dom"
import ImageSlider from "./ImageSlider"
import InstaWidget from "./InstaWidget"

const Home = () => {
  return (
    <Container className="d-grid justify-content-center mt-5">
      <Col>
        <Row id="home" className="mainRow">
          <div id="mainImg">
            <h2 id="mainTitle">Betonilattiavalujen<br />jämäkkä<br />ammattilainen</h2>
          </div>
        </Row>

        <Row className="d-grid justify-content-center">
          <Stack gap={0.5} id="mainText">
            <p>
              Toteutamme kaikenlaiset lattiavalut vuosien kokemuksella niin yrityksille kuin yksityisille. <br />
              Toimialueemme on Pirkanmaa, mutta olemme vierailleet myös ympäröivissä maakunnissa.
            </p>
            <p>
              Toimintaamme on aina ohjannut suuri ammattiylpeys,
              joka takaa parhaan mahdollisen työnjäljen jokaisessa valussa.
            </p>
            <p>
              Kysy rohkeasti tarjous tai ota yhteyttä, olet sitten rakennusalan ammattilainen
              tai kokemattomampi ensirakentaja. <br />
              Autamme mielellämme lattiavaluusi liittyvissä kysymyksissä.
            </p>
          </Stack>
        </Row>
        <Row className="borderBottom d-grid justify-content-center">
          <Button
            as={Link}
            to="/tarjouspyynto"
            id="nappiTarjouspyyntoon"
            onClick={() => console.log('tarjouspyyntö klikattu')}
          >
            Kysy tarjous!
          </Button>
        </Row>
        <Row id="palvelut" className="borderBottom">
          <Services />
        </Row>
        <Row id="kuvat" className="borderBottom">
          <Row xs={1} lg={2} className="mb-3 d-flex justify-content-center">
            <Col lg={8} xl={7}>
              <h2 className="headerStyle">Kuvia kohteistamme</h2>
              <ImageSlider />
            </Col>
            <Col lg={4} xl={4} className="mt-2">
              <InstaWidget />
            </Col>
          </Row>
        </Row>
        <Row id="yhteystiedot">
          <Contact />
        </Row>
      </Col>
    </Container>
  )
}

export default Home