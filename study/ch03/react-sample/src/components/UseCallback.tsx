import React, { useState, useCallback} from "react";

type ButtonProps = {
  onClick: () => void
}

// DecrementButton은 보통의 함수 컴포넌트로 버튼을 표시한다.
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log(`DecrementButton이 다시 그려졌습니다.`)
  return <button onClick={onClick}>Decrement</button>
}

// IncrementButton은 메모이제이션한 함수 컴포넌트로 버튼을 표시한다.
const IncrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log(`IncrementButton이 다시 그려졌습니다.`)
  return <button onClick={onClick}>Increment</button>
}

// DoubleButton은 메모이제이션한 함수 컴포넌트로 버튼을 표시한다.
const DoubleButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log(`DoubleButton이 다시 그려졌습니다.`)
  return <button onClick={onClick}>Double</button>
}

const ParentUseCallback = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }

  // useCallback을 사용해 함수를 메모이제이션 한다.
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* 컴포넌트에 함수를 전달한다. */}
      <DecrementButton onClick={decrement}></DecrementButton>
      {/* 메모이제이션된 컴포넌트에 함수를 전달한다. */}
      <IncrementButton onClick={increment}></IncrementButton>
      {/* 메모이제이션된 컴포넌트에 메모이제이션된 함수를 전달한다. */}
      <DoubleButton onClick={double}></DoubleButton>
    </div>
  )
}

export default ParentUseCallback