import logo from './logo.svg';
import './App.css';
import Modules from './listModules';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Módulos:</h2>
        <p>Selecione o módulo para ver as aulas disponíveis:</p>
        <Modules />
      </header>
    </div>
  );
}
