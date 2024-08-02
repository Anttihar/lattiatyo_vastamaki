import { Carousel, Container, Image } from "react-bootstrap"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"

const ImageSlider = () => {
  return (
    <Container className="images">
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <Image src={img1} rounded fluid></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img2} rounded fluid></Image>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default ImageSlider