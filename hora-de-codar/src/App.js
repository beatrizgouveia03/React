import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Amanda"

  return (
    <div className="App">
      <Pessoa 
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto='https:/via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
