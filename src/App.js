import './App.css';
import EffectTutorial from './UseEffect/EffectTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import ReducerTutorialV from './UseReducer/ReducerTutorialV';
import StateTutorial from './UseState/StateTutorial';
import ContextTutorial from './UseContext/ContextTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import RefTutorial from './UseRef/RefTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import CallBackTutorial from './UseCallback/CallbackTutorial';

function App() {
  return (
    <div className="App">
      {/* <StateTutorial /> */}
      <ReducerTutorialV />
    </div>
  );
}

export default App;