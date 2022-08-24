import { useState } from "react"

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const onIncrement = () => {
    setCount(prev => prev + 1)
  }

  const onDecrement = () => {
    setCount(prev => {
        if (prev > 0) {
            return prev - 1;
        } else {
            return 0;
        }
    })
  }

  return {
    onIncrement,
    onDecrement,
    count
  }
}