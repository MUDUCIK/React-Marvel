import img from "./error.gif"

const ErrorMessage = () => {
  return (
    <img
      src={img}
      alt="Error"
      style={{
        margin: "0 auto",
        objectFit: "contain",
      }}
    />
  )
}

export default ErrorMessage
