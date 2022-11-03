import React from "react";
import "./Counter.scss"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../utils/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div className="container__counter">
            <div className="container__counter-btn">
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <span>{ count }</span>
            </div>
        </div>
    )
}

export default Counter;