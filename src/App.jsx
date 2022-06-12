import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Movie /> */}
    </div>

  );
}

export default App;
