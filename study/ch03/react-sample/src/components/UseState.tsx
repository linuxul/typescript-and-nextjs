 import { useState } from "react";

type CounterProps = {
  initialValue: number
}

const CounterUseState = (props: CounterProps) => {
  const { initialValue } = props
  // 카운트를 유지하는 첫 번째 상태를 useState()로 선언한다. 인수에는 초기값을 지정한다.
  // count가 현재 상태, setCount가 상태를 업데이트하는 함수다.
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCount를 호출해서 상태를 업데이트한다. */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default CounterUseState