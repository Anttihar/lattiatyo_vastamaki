import React from "react"
import { Button, Col, Row, Container } from "react-bootstrap"
import Contact from "./Contact"
import Services from "./Services"
import { Link } from "react-router-dom"
const ImageSlider = React.lazy(() => import("./ImageSlider"))

const Home = () => {
  return (
    <Container className="mt-5">
      <Row id="home" className="mainRow">
        <div id="mainImg">
          <h1 id="mainTitle">BETONILATTIAVALUJEN<br />JÄMÄKKÄ<br />AMMATTILAINEN</h1>
        </div>
      </Row>

      <Row className="justify-content-center">
        <div id="mainText">
          <p>
            Lattiatyö Vastamäki Oy toteuttaa kaikenlaiset lattiavalut vuosien kokemuksella niin
            yrityksille kuin yksityisille.<br />
            Pääasiallinen toimialueemme on Pirkanmaa, mutta olemme urakoineet betonilattioita
            myös ympäröivissä maakunnissa.
          </p>
          <p>
            Toimintaamme on aina ohjannut suuri ammattiylpeys, joka takaa parhaan mahdollisen työnjäljen.
            Ajattelemme, että jokainen toteuttamamme lattiavalu toimii parhaana käyntikorttinamme.
          </p>
          <p>
            Kysy rohkeasti tarjous tai ota yhteyttä, olet sitten rakennusalan ammattilainen
            tai kokemattomampi ensirakentaja. <br />
            Autamme mielellämme lattiavaluusi liittyvissä kysymyksissä.
          </p>
        </div>
      </Row>
      <Row className="borderBottom justify-content-center">
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
            <Col className="d-grid justify-content-center align-items-center">
              <Contact />
            </Col>
            <Col className="d-grid justify-content-center align-items-center mb-4">
              <div className="">
                <a
                  href="https://bol.vastuugroup.fi/#/search/FIN%2F3365082-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/luotettava_kumppani.png"
                    alt="Linkki tilaajavastuu raporttiin"
                    width={175}
                    loading="lazy"
                  />
                </a>
              </div>
            </Col>
            <Col className="d-grid justify-content-center align-items-center mb-4">
              <div className="d-grid">
                <h4 style={{ fontWeight: "300" }} className="headerStyle mb-3">Seuraa meitä Instagramissa!</h4>
                <div className="d-grid justify-content-center">
                  <a
                    href="https://www.instagram.com/lattiatyovastamaki/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/instagram.webp"
                      alt="Linkki instagramiin"
                      width={50}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home