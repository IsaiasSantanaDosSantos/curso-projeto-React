import './App.css';
import OutraListra from './components/OutraLista';


function App() {

  const meusItens = ['React', 'Vue', 'Javascript', 'Html', 'CSS', 'Bootstrap', 'Mysql', 'GitHub']

  return (
    <div className="App">
      <h1>Renderização Listas</h1>
      <OutraListra itens={meusItens} />
      <OutraListra itens={[]} />
    </div>
  );
}

export default App;
