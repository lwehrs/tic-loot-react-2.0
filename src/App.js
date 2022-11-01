import logo from './img/logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={logo} alt='Logo' width={'400px'} />
    </div>
  );
}

export default App;