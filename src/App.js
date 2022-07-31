import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./components/Search"
import Images from './components/Images';
import Details from './components/Details';
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Details/>} path="/details"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
