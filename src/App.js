import logo from './logo.svg';
import './App.css';
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="App">
        <header>
            <h1>Pomodorly</h1>
        </header>
        <main>
            <Timer />
        </main>
    </div>
  );
}

export default App;
