'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Counter: {count}</h2>
      <div className="space-x-4">
        <button 
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Increment
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}