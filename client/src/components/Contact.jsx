import { Container } from "react-bootstrap"

const Contact = () => {
  return (
    <Container className="centered">
      <p style={{ textAlign: "center" }}>
        Tommi Vastamäki <br />
        Puh. 040 7218470 <br />
        lattiatyovastamaki@gmail.com
      </p>
      <p style={{ textAlign: "center" }}>
        Lattiatyö Vastamäki Oy <br />
        Y-tunnus 3365082-7 <br />
        Etu-Hankkionkatu 8 B20<br />
        33700 Tampere
      </p>
    </Container>
  )
}

export default Contact