import "./BaseCounter.scss"
import { HiMinus, HiPlusSm } from "react-icons/hi"
import { useCounter } from "../../hooks/useCounter"

const BaseCounter = () => {
  const { onDecrement, onIncrement, count } = useCounter(0);
    return (
        <div className='base-counter'>
            <div onClick={onDecrement} className='decrement'>
               <HiMinus />
            </div>
            <div className='content'>
                { count }
            </div>
            <div onClick={onIncrement} className='increment'>
                <HiPlusSm />
            </div>
        </div>
    )
}

export default BaseCounter