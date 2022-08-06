import logo from './logo.svg';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./components/Search"
import Images from './components/Images';
import Details from './components/Details';
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Details/>} path="/details"></Route>
          <Route element={<Login/>} path="/login"></Route>
          <Route element={<Registration/>} path="/register"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
