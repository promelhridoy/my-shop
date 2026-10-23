
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/hooks";

import {
  increment,
  decrement,
  incrementByAmount,
} from "./counterSlice";

export default function Counter() {
  const value = useAppSelector(
    (state) => state.counter.value
  );

  const dispatch = useAppDispatch();

  return (
    <div className="counter flex flex-col items-center justify-center gap-2">
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      <br />

      <span>{value}</span>
      <br />

      <button onClick={() => dispatch(increment())}>
        +
      </button>
        <br />

      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>

      <button onClick={() => dispatch(incrementByAmount(-value))}>
        reset
      </button>
    </div>
  );
}
