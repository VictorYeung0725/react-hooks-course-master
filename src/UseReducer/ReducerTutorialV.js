import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case 'TOGGLE':
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return { state };
  }
};

function ReducerTutorialV() {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);
  const [state, disptach] = useReducer(reducer, { count: 0, showText: true });

  const handleClick = () => {
    disptach({ type: 'INCREMENT' });
    disptach({ type: 'TOGGLE' });
  };

  return (
    <div>
      <h1>Please add count {state.count}</h1>
      <button onClick={handleClick}>Click here</button>

      {state.showText && <p>This is a Text</p>}
    </div>
  );
}

export default ReducerTutorialV;
