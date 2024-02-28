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
import CounterUseState from "./components/UseState"
import CounterUseReducer from './components/UseReducer'
import ParentUseMemo from "./components/UseMemo"
import ParentUseMemo2 from "./components/UseMemo2"
import ParentUseCallback from "./components/UseCallback"
import UseMemoSample from "./components/UseMemoSample"
import ClockUseEffect from "./components/UseEffectSample"
import ParentUseContext from "./components/UseContextSample"
import ImageUploaderUseRef from "./components/UseRefSample"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ImageUploaderUseRef />
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     <ParentUseContext />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <ClockUseEffect />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <UseMemoSample />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <ParentUseCallback />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <ParentUseMemo2 />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <ParentUseMemo />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <CounterUseReducer initialValue={0}/>
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <CounterUseReducer initialValue={0}/>
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <CounterUseState initialValue={0}/>
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <ContextPropsPage name="서정식" />
//   </React.StrictMode>
// )

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
