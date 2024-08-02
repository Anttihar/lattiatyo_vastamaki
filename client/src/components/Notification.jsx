import { Alert } from "react-bootstrap"

const Notification = ({ message, errorMessage }) => {
  const style = {
    margin: "1rem 0",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "center"
  }
  if (message) {
    return (
      <Alert
        style={style}
        variant="success"
      >
        {message}
      </Alert>
    )
  }
  if (errorMessage) {
    return (
      <Alert
        style={style}
        variant="danger"
      >
        {errorMessage}
      </Alert>
    )
  }
  return null
}

export default Notification