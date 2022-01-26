import './App.css';

function App() {

const name = "Isaias"
const newName = name.toUpperCase()

function sun(a, b) {
  return a + b
}

const url = "https://via.placeholder.com/150"


  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sun(1, 4)}</p>
      <img src={url} alt="Nature"></img>
    </div>
  );
}

export default App;
