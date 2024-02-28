const Hello = () => {
  const onClick = () => {
    alert("hello")
  }

  const text = "Hello, Recat"

  return <div onClick={onClick}>{text}</div>
}

export default Hello
