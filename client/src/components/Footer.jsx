import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    fontWeight: 100,
    marginTop: "1rem"
  }
  return (
    <div style={style}>
      <p>Copyright <FaRegCopyright /> 2024 Antti Harra</p>
    </div>
  )
}

export default Footer