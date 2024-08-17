import { Carousel, Container, Col } from "react-bootstrap"
import lattiavalu1 from "../assets/images/lattiavalu_1.jpg"
import lattiavalu2 from "../assets/images/lattiavalu_2.jpg"

const ImageSlider = () => {
  return (
    <Col>
      <Container className="img-container">
        <h2 className="headerStyle">Kuvia kohteistamme</h2>
        <Carousel id="karuselli" fade interval={5000}>
          <Carousel.Item>
            <img className="imagee" src={lattiavalu1} alt="OKT lattiavalu levitys"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="imagee" src={lattiavalu2} alt="OKT lattiavalu hiertopinnalla" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Col>
  )
}

export default ImageSlider