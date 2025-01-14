import React, { useContext } from "react"
import Name from "./Name"

type User = {
  id: number
  name: string
}

// 사용자 데이트를 저장하는 Context를 작성한다.
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  // useContext에 Context를 전달함으로써, Context로부터 값을 얻는다.
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current : {now.toLocaleString()}</p>
      <GrandChild></GrandChild>
    </div>
  )
}

const ParentUseContext = () => {
  const user: User = {
    id: 1,
    name: "정식"
  }
  return (
    // Context에 값을 전달한다.
    <UserContext.Provider value={user}>
      <Child></Child>
    </UserContext.Provider>
  )
}

export default ParentUseContext