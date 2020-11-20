import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ListarNotas } from "../components/notas/ListarNotas";
import { EditarNota } from "../components/notas/EditarNota";
import { AgregarNota } from "../components/notas/AgregarNota";

export const NotasRouter = () => {
  return (

        <div className="container mt-5">

        <Switch>
          <Route exact path="/" component={ListarNotas} />

          <Route exact path="/notas/nueva" component={AgregarNota} />

          <Route exact path="/notas/editar/:id" component={EditarNota} />

          <Redirect to="/" />
        </Switch>
        </div>
    
  );
};
