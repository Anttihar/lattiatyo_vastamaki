import { Carousel, Container, Col } from "react-bootstrap"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"

const ImageSlider = () => {
  return (
    <Col>
      <Container className="img-container">
        <h2 className="headerStyle">Kuvia kohteistamme</h2>
        <Carousel id="karuselli" fade interval={5000}>
          <Carousel.Item>
            <img className="imagee" src={img1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="imagee" src={img2} />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Col>
  )
}

export default ImageSlider