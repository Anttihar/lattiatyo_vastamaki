import { Carousel, Container, Col } from "react-bootstrap"

const ImageSlider = () => {
  return (
    <Col>
      <Container className="img-container">
        <h2 className="headerStyle">Kuvia kohteistamme</h2>
        <Carousel id="karuselli" fade interval={3000}>
          <Carousel.Item>
            <img className="image" src="/lattiavalu_vesilahti.webp" alt="OKT lattiavalu levitys"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" src="/lattiavalu_ruovesi.webp" alt="Kesämökin lattiavalu Ruovedellä" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" src="/lattiavalu_hiertopinnalla.webp" alt="OKT lattiavalu hiertopinnalla" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Col>
  )
}

export default ImageSlider