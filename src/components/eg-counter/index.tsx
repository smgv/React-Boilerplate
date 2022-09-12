import { decrement, increment } from '../../redux/features/eg-counter/eg-counter.slice';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { fetchUsers } from '../../redux/features/eg-user-thunk/eg-user-thunk.slice';

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(fetchUsers())}>
          Get Users
        </button>
      </div>
    </div>
  );
}

export default Counter;
