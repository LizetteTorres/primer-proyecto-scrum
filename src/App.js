import logo from './assets/img/logo.png';
import './App.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Comunidad Digital los Robles</h1>
        </p>
        <PrimerComponente></PrimerComponente>
        <SegundoComponente></SegundoComponente>
      </header>
    </div>
  );
}

export default App;
