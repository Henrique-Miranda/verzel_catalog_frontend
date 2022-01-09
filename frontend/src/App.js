import logo from './logo.svg';
import './App.css';
import Modules from './listModules';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reading API:
          <Modules />
        </p>
      </header>
    </div>
  );
}
