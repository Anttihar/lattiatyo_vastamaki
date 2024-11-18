import { Carousel, Container } from "react-bootstrap"

const ImageSlider = () => {
  return (
    <Container className="img-container">
      <h2 className="headerStyle">Kuvia kohteistamme</h2>
      <Carousel id="karuselli" fade interval={3500}>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_vesilahti.webp" alt="OKT lattiavalu levitys"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>OKT Lattiavalu Vesilahti</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_tampere_tamk.webp" alt="TAMK liikuntatilan uusi betonilattia"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>TAMK Tampere uusi betonilattia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_kuhmoinen.webp" alt="Kesämökin lattiavalu Kuhmoisissa" />
          <Carousel.Caption>
            <p style={{ color: "white" }}>Kesämökin lattiavalu Kuhmoinen</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_hiertopinnalla.webp" alt="OKT lattiavalu hiertopinnalla" />
          <Carousel.Caption>
            <p style={{ color: "black" }}>OKT lattiavalu konehiertopinnalla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/holvivalu.webp" alt="Holvivalu Hämeenlinnassa" />
          <Carousel.Caption>
            <p style={{ color: "white" }}>Holvivalu Hämeenlinna</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_nokia.webp" alt="OKT lattiavalu Nokialla"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>OKT Lattiavalu Nokia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/autotalli_hameenkyro.webp" alt="Autotalli lattiavalu kuivasirotepinnoitteella Hämeenkyrö"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>Autotallin lattiavalu kuivasirotepinnoitteella</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/autotalli_lempaala.webp" alt="Autotalli lattiavalu kuivasirotepinnoitteella Lempäälä"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>Autotallin lattiavalu kuivasirotepinnoitteella</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_ruovesi.webp" alt="Autotalli lattiavalu Ruovesi"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>Autotallin Lattiavalu Ruovesi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_tampere.webp" alt="OKT lattiavalu Tampere"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>OKT Lattiavalu Tampere</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_palkane.webp" alt="OKT lattiavalu Pälkäne"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>OKT Lattiavalu Pälkäne</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_ylojarvi.webp" alt="OKT lattiavalu Ylöjärvi"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>OKT Lattiavalu Ylöjärvi</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src="/lattiavalu_vammala.webp" alt="Vammalan Ellivuoren huoltorakennukseen uusi betonilattia"/>
          <Carousel.Caption>
            <p style={{ color: "white" }}>Ellivuoren huoltorakennuksen uusi betonilattia</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default ImageSlider