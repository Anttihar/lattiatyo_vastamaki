// Ei käytössä

import { useState } from "react"
import { Table, Form } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"

const UploadFiles = ({ formData, setFormData }) => {
  const [fileLimit, setFileLimit] = useState(false)

  const handleUploadedFiles = files => {
    const uploaded = [...formData.liitteet]

    files.some(file => {
      if (uploaded.length === 5) alert(`Et voi lisätä yli viittä tiedostoa`)
      if (!uploaded.find(f => f.name === file.name) && uploaded.length < 5) {
        uploaded.push(file)
        if (uploaded.length === 5) {
          setFileLimit(true)
        }
      }
    })

    setFormData({ ...formData, liitteet: uploaded })
  }

  const handleFileEvent = (event) => {
    event.preventDefault()
    const files = Array.prototype.slice.call(event.target.files)
    handleUploadedFiles(files)
  }

  const handleDelete = (name) => {
    const updatedFiles = [...formData.liitteet.filter(f => f.name !== name)]
    setFormData({ ...formData, liitteet: updatedFiles })
    setFileLimit(false)
  }

  const isDisabled = fileLimit ? true : false

  return (
    <>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="liite">Liitä mukaan POHJAPIIRUSTUS ja tarvittaessa muita oleellisia kuvia</Form.Label>
        <Form.Control
          type="file"
          name="liite"
          id="liite"
          onChange={(e) => handleFileEvent(e)}
          disabled={isDisabled}
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <Form.Text>Voit lisätä korkeintaan 5 tiedostoa. Sallitut tiedostomuodot: pdf, png, jpg, jpeg</Form.Text>
      </Form.Group>
      <Form.Group>
        <Table striped size="sm" className="mb-4 w-50 w-min">
          {formData.liitteet.length > 0 &&
          <thead>
            <tr>
              <td>Liitetyt tiedostot:</td>
              <td>Koko</td>
              <td></td>
            </tr>
          </thead>
          }
          <tbody>
            {formData.liitteet.map((file, i) => {
              return(
                <tr key={i}>
                  <td>{file.name}</td>
                  <td>{Math.round(file.size / 1000)} kB</td>
                  <td><FaTrashAlt onClick={() => handleDelete(file.name)} /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Form.Group>
    </>
  )
}

export default UploadFiles