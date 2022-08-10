import logo from './logo.svg';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./components/Search"
import Images from './components/Images';
import Details from './components/Details';
import Registration from "./components/Registration";
import Login from "./components/Login";
import CompanyRegistration from './components/CompanyRegistration';
import Main from './views/Main';
import CreateNewPost from './components/CreateNewPost';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Details/>} path="/details"></Route>
          <Route element={<Login/>} path="/login"></Route>
          <Route element={<CompanyRegistration/>} path="/register"></Route>
          <Route element={<CreateNewPost/>} path="/newPost"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
