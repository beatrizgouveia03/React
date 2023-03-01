import './App.css';
import OtherList from './components/secundarios/OtherList';


function App() {

  const meusItems = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OtherList itens={meusItems}/>
      <OtherList itens={[]} />
      
    </div>
  );
}

export default App;
