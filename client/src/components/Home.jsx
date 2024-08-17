import { Button, Col, Row, Container, Stack } from "react-bootstrap"
import Contact from "./Contact"
import Services from "./Services"
import { Link } from "react-router-dom"
import ImageSlider from "./ImageSlider"
import instaIcon from "../assets/icons/instagram.png"
import lkIcon from "../assets/icons/luotettava_kumppani.png"

const Home = () => {
  return (
    <Container className=" mt-5">
      <Col>
        <Row id="home" className="mainRow">
          <div id="mainImg">
            <h2 id="mainTitle">BETONILATTIAVALUJEN<br />JÄMÄKKÄ<br />AMMATTILAINEN</h2>
          </div>
        </Row>

        <Row className="d-grid justify-content-center">
          <Stack gap={0.5} id="mainText">
            <p>
              Toteutamme kaikenlaiset lattiavalut vuosien kokemuksella niin yrityksille
              kuin yksityisille.<br />
              Pääasiallinen toimialueemme on Pirkanmaa, mutta olemme vierailleet myös
              ympäröivissä maakunnissa.
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
        <Row id="kuvat">
          <ImageSlider />
        </Row>
        <Row id="yhteystiedot">
          <Col className="mt-4">
            <h2 className="headerStyle">Yhteystiedot</h2>
            <Row xs={1} sm={2} lg={3} className="d-flex justify-content-center">
              <Col className="d-grid justify-content-center align-items-center mb-4 order-3 sm-order-3">
                <div className="d-grid">
                  <h5 style={{ fontWeight: "300" }} className="headerStyle mb-3">Seuraa meitä Instagramissa!</h5>
                  <div className="d-grid justify-content-center">
                    <a
                      href="https://www.instagram.com/lattiatyovastamaki/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instaIcon} width={50}></img>
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="d-grid justify-content-center align-items-center order-1 sm-order-2">
                <Contact />
              </Col>
              <Col className="d-grid justify-content-center align-items-center mb-4 order-2 sm-order-1">
                <div className="">
                  <a
                    href="https://bol.vastuugroup.fi/#/search/FIN%2F3365082-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={lkIcon} width={175} />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default Home