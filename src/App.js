import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import WholePage from './components/WholePage';

function App() {
  const name = "Zaber"
  return (
    <div className="App">
      <Topbar/>
      <WholePage />
    </div>
  );
}

export default App;
