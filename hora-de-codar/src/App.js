import './App.css';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld /> <br />
      <Pessoa 
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto='https:/via.placeholder.com/150'
      />
      <Frase /> <br />
      <Frase />
      <List />
      
    </div>
  );
}

export default App;
