import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Delete from "./Pages/Delete/Delete"

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        {/* adicionar header */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Delete' element={<Delete/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
