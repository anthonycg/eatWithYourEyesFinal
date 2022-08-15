import logo from "./logo.svg";
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Images from "./components/Images";
import Details from "./components/Details";
import Registration from "./components/Registration";
import Login from "./components/Login";
import CompanyRegistration from "./components/CompanyRegistration";
import Main from "./views/Main";
import Logout from "./components/Logout";
import NewPost from "./components/NewPost";
import AllPosts from "./components/AllPosts";
import Update from "./components/Update";
import React, {useState} from "react";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Details />} path="/details"></Route>
          <Route element={<Login />} path="/api/login"></Route>
          <Route element={<Registration />} path="/api/register"></Route>
          <Route element={<Logout />} path="/api/logout"></Route>
          <Route element={<NewPost />} path="/api/posts/new"></Route>
          <Route element={<AllPosts />} path="/api/posts/"></Route>
          <Route element={<Update />} path="/api/posts/:id"></Route>
          {/* <Route element={<AllPosts />} path="/api/posts"></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
