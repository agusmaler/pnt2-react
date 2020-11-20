import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { eliminarNota, obtenerNotaEliminar, obtenerNotaEditar } from "../../actions/notas";
import Swal from "sweetalert2";

export const Nota = ({ nota }) => {
  const { autor, titulo, id, texto } = nota;

  const dispatch = useDispatch();
  const history = useHistory();

  const confirmarEliminarNota = (id) => {
    dispatch(obtenerNotaEliminar(id));

    Swal.fire({
      title: "¿Estas seguro?",
      text: "Si se elimina, la nota no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        // pasarlo al action
        dispatch(dispatch(eliminarNota()));
      }
    });
  };

  const redireccionarEdicion = nota => {
    dispatch(obtenerNotaEditar(nota));
    history.push(`/notas/editar/${nota.id}`);
  }

  return (
    <div className="row mt-3 d-flex justify-content-center mb-3">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body ">
            <div className="d-flex">
              <h5 className="card-title p-2 font-weight-bold">{titulo}</h5>
              <p className="ml-auto p-2 font-italic">{autor}</p>
            </div>

            <p className="card-text">{texto}</p>

            <button
               type="button"
                className="btn btn-primary"
                onClick={ () => redireccionarEdicion(nota)  }
                >
              Editar
            </button>

            <button
              type="button"
              className="btn btn-danger ml-2"
              onClick={() => confirmarEliminarNota(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
