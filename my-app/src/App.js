import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
    </div>
  );
}

export default App;
