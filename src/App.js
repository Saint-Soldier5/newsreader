import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import New from './components/New';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Routes>
        <Route exact path = "/" element = {<New key={"general"} country = "ca" category = "general"/>}/>
        <Route exact path = "/science" element = {<New key={"science"} country = "ca" category = "science"/>}/>
        <Route exact path = "/business" element = {<New key={"business"} country = "ca" category = "business"/>}/>
        <Route exact path = "/technology" element = {<New key={"technology"} country = "ca" category = "technology"/>}/>
        <Route exact path = "/sports" element = {<New key={"sports"} country = "ca" category = "sports"/>}/>
        <Route exact path = "/entertainment" element = {<New key={"entertainment"} country = "ca" category = "entertainment"/>}/>
        <Route exact path = "/about" element = {<About/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
