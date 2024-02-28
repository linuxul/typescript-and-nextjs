import React from "react";


type ContainerProps = {
  title: string,
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { title, children} = props

  return (
    <div style={{background: 'red'}}>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    <Container title="hello">
      <p>이부분이 배경색으로 둘려싸여 있습니다.</p>
    </Container>
  )
}

export default Parent

// type ContainerProps = {
//   title: string,
//   children: React.ReactNode
// }

// const Container = (props: ContainerProps) => {
//   const { title, children} = props

//   return (
//     <div style={{background: 'red'}}>
//       <span>{title}</span>
//       <span>{children}</span>
//     </div>
//   )
// }

// const Parent = (): JSX.Element => {
//   return (
//     <Container title="hello">
//       <p>이부분이 배경색으로 둘려싸여 있습니다.</p>
//     </Container>
//   )
// }

// export default Parent


// const Container = (props: { title: string; children: React.ReactElement }) => {
//   const { title, children } = props

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       <span>{title}</span>
//       <div>{children}</div>
//     </div>
//   )
// }

// const Parent = () => {
//   return (
//     <Container title="Hello">
//       <p>이 부분이 배경색으로 둘려싸여 있습니다.</p>
//     </Container>
//   )
// }

// export default Parent
