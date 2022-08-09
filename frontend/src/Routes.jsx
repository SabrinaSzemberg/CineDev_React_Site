import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Delete from "./Pages/Delete/Delete"
import ListaClientes from "./Pages/ListarClientes/ListaClientes";
import ShowClientId from "./Pages/MostrarClienteID/ShowClientId";
import AdicionarCliente from "./Pages/AdicionarCliente/AdicionarCliente";
import EditarCliente from "./Pages/EditarCliente/EditarCliente.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        {/* adicionar header */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/get' element={<ListaClientes/>}/>
        <Route path='/getClienteId' element={<ShowClientId/>}/>
        <Route path="/post" element={<AdicionarCliente/>}/>
        <Route path="/put" element={<EditarCliente/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
