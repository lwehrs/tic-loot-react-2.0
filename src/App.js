import './css/App.css'
import NavBar from './components/NavBar'
import { FilteringTable } from './components/FilteringTable'


function App() {
  return (
    <div className="App">
      <NavBar />
      <FilteringTable />
    </div>
  );
}

export default App;