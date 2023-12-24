import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos'

function App() {
  return (<>
  <Title/>
  <AddTodos/>
  <Todos/>
  </>
  );
}

export default App;
