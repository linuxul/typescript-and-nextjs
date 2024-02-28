import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Hello from "./Hello"
import Name from "./components/Name"
import Message from "./components/Message"
import Container from "./components/ContainerSample"
import Parent from "./components/ContainerSample"
import ContextPage from "./components/ContextSample"
import ContextPropsPage from "./components/ContextPropsSample"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ContextPropsPage name="서정식" />
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     <ContextPage />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <Parent />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <Message />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <Name />
//   </React.StrictMode>
// )

// root.render(
//   <h1>제목</h1>
// );

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
