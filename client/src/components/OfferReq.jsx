import { useState } from "react"
import axios from "axios"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Swal from "sweetalert2"

const OfferReq = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    yksityinen: true,
    nimi: "",
    yNimi: "",
    puhelin: "",
    email: "",
    osoite: "",
    ala: "",
    vahvuus: "",
    kohde: "",
    olosuhde: "",
    eriste: "",
    sirote: false,
    hionta: false,
    viesti: "",
    liite: null
  })

  const form = new FormData()
  form.append('yksityinen', formData.yksityinen)
  form.append('nimi', formData.nimi)
  form.append('yNimi', formData.yNimi)
  form.append('puhelin', formData.puhelin)
  form.append('email', formData.email)
  form.append('osoite', formData.osoite)
  form.append('ala', formData.ala)
  form.append('vahvuus', formData.vahvuus)
  form.append('kohde', formData.kohde)
  form.append('olosuhde', formData.olosuhde)
  form.append('eriste', formData.eriste)
  form.append('sirote', formData.sirote)
  form.append('hionta', formData.hionta)
  form.append('viesti', formData.viesti)
  form.append('liite', formData.liite)

  console.log(formData)

  const handleValidation = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      Swal.fire({
        title: 'Oops!',
        text: 'Täytäthän kaikki pakolliset tiedot',
        icon: 'error',
        color: "#eeeeee",
        background: "#202020",
        confirmButtonColor: "#f27474",
        didClose: () => window.scroll(top)
      })
    }
    setValidated(true)
    handleSubmit(event)
  }

  const handleSubmit = async (event) => {
    const currentForm = event.currentTarget
    if (currentForm.checkValidity() === true) {
      event.preventDefault()

      try {
        await axios.post("/api/send", form)
          .then(res => {
            console.log('viesti lähetetty', res)
            Swal.fire({
              title: 'Tarjouspyyntö lähetetty!',
              text: 'Olemme yhteydessä mahdollisimman pian',
              icon: 'success',
              color: "#eeeeee",
              background: "#2a2a2a",
              confirmButtonColor: "#2a2a2a",
              didClose: () => window.scroll(top)
            })
          })
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: 'Oops!',
          text: 'Jotakin meni pieleen',
          icon: 'error',
          color: "#eeeeee",
          background: "#0e2006",
          confirmButtonColor: "#a5dc86"
        })
      }

      window.scroll(top)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Container className="tarjouspyynto">
      <Row xs={1} md={2} lg={3}>
        <Col md={8} lg={8}>
          <h2 className="headerStyle">Tarjouspyyntö</h2>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleValidation}
            encType="multipart/form-data"
            style={{ fontFamily: "Kanit, sans-sherif", fontWeight: 200 }}
          >
            <Form.Group>
              <Form.Check
                inline
                required
                type="radio"
                label="Yksityinen"
                name="yksityinen"
                id="yksityinen"
                onChange={() => setFormData({ ...formData, yksityinen: true })}
              />
              <Form.Check
                inline
                required
                type="radio"
                label="Yritys"
                name="yksityinen"
                id="yritys"
                value={!formData.yksityinen}
                onChange={() => setFormData({ ...formData, yksityinen: false })}
              />
            </Form.Group>
            <Row className="mt-2 mb-2" xs={1} sm={2}>
              <Form.Group className="mb-2" as={Col}>
                <Form.Label htmlFor="nimi">Nimi</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="nimi"
                  id="nimi"
                  size="sm"
                  placeholder="Nimi"
                  value={formData.nimi}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor="yNimi">Yritys</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="yNimi"
                  id="yNimi"
                  size="sm"
                  placeholder="Yritys"
                  value={formData.yNimi}
                  onChange={handleChange}
                  disabled={formData.yksityinen}
                />
              </Form.Group>
            </Row>
            <Row className="mb-2" xs={1} sm={2}>
              <Form.Group className="mb-2" as={Col}>
                <Form.Label htmlFor="puhelin">Puhelinnumero</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="puhelin"
                  id="puhelin"
                  size="sm"
                  placeholder="Puhelinnumero"
                  value={formData.puhelin}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor="email">Sähköposti</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  id="email"
                  size="sm"
                  placeholder="Sähköposti"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-2" sm={1} lg={2}>
              <Form.Group className="mb-2" as={Col}>
                <Form.Label htmlFor="osoite">Kohteen osoite</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="osoite"
                  id="osoite"
                  size="sm"
                  placeholder="Kohteen osoite"
                  value={formData.osoite}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="ala">Valettava ala</Form.Label>
                  <Form.Control
                    type="text"
                    name="ala"
                    id="ala"
                    size="sm"
                    placeholder="m2"
                    value={formData.ala}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col}>
                  <Form.Label htmlFor="vahvuus">Laatan vahvuus</Form.Label>
                  <Form.Control
                    type="text"
                    name="vahvuus"
                    id="vahvuus"
                    size="sm"
                    placeholder="cm"
                    value={formData.vahvuus}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </Row>
            <Row className="mb-2" xs={2} md={3}>
              <Form.Group as={Col}>
                <Form.Label htmlFor="kohde">Kohde</Form.Label>
                <Form.Select
                  name="kohde"
                  id="kohde"
                  size="sm"
                  value={formData.kohde}
                  onChange={handleChange}
                >
                  <option>Valitse..</option>
                  <option>Omakotitalo</option>
                  <option>Paritalo</option>
                  <option>Rivitalo</option>
                  <option>Kerrostalo</option>
                  <option>Autotalli</option>
                  <option>Varasto/Halli</option>
                  <option>Toimitila</option>
                  <option>Joku muu</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2" as={Col}>
                <Form.Label htmlFor="olosuhde">Olosuhteet</Form.Label>
                <Form.Select
                  name="olosuhde"
                  id="olosuhde"
                  size="sm"
                  value={formData.olosuhde}
                  onChange={handleChange}
                >
                  <option>Valitse..</option>
                  <option>Taivasalla</option>
                  <option>Säältä suojassa</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2" as={Col}>
                <Form.Label htmlFor="eriste">Lattiaeriste</Form.Label>
                <Form.Select
                  name="eriste"
                  id="eriste"
                  size="sm"
                  value={formData.eriste}
                  onChange={handleChange}
                >
                  <option>Valitse..</option>
                  <option>EPS (styrox)</option>
                  <option>Finnfoam tai vastaava</option>
                  <option>Joku muu</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-2" xs={1} sm={2}>
              <Form.Group as={Col}>
                <Form.Label htmlFor="sirote">Haluan tarjouksen myös</Form.Label>
                <Form.Check
                  inline
                  type="checkbox"
                  name="sirote"
                  id="sirote"
                  label="Kuivasirotepinnoitus (Neodur HE2)"
                  onChange={() => setFormData({ ...formData, sirote: !formData.sirote })}
                />
                <Form.Check
                  inline
                  type="checkbox"
                  name="hionta"
                  id="hionta"
                  label="Sementtiliiman kevyt hionta"
                  onChange={() => setFormData({ ...formData, hionta: !formData.hionta })}
                />
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col}>
                <Form.Label htmlFor="viesti">Viesti</Form.Label>
                <Form.Control
                  as="textarea"
                  name="viesti"
                  id="viesti"
                  rows={5}
                  value={formData.viesti}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="liite">Liitä mukaan POHJAPIIRUSTUS, jos mahdollista</Form.Label>
                <Form.Control
                  type="file"
                  name="liite"
                  id="liite"
                  onChange={(e) => setFormData({ ...formData, liite: e.target.files[0] })}
                  accept=".pdf"
                />
                <Form.Text>Sallittu tiedostomuoto: pdf</Form.Text>
              </Form.Group>
            </Row>
            <Button
              variant="warning"
              className="mb-4"
              type="submit"
              name="buttonForm"
              id="buttonForm"
            >
              Lähetä tarjouspyyntö
            </Button>
          </Form>
        </Col>
        <Col md={4} lg={4} className="d-flex justify-content-center mt-5">
          <div className="tarjous-yht">
            <h3 className="headerStyle">Yhteystiedot</h3>
            <p style={{ textAlign: "center" }}>
              Tommi Vastamäki <br />
              Puh. 040 7218470 <br />
              lattiatyovastamaki@gmail.com
            </p>
            <p style={{ textAlign: "center" }}>
              Lattiatyö Vastamäki Oy <br />
              Y-tunnus 3365082-7
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OfferReq