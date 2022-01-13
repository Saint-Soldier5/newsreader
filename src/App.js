import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import New from './components/New';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <NavBar/>
        <New country = "ca" category = ""/>
    </div>
  );
}

export default App;
