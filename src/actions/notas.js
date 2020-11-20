import { types } from "../types/types";
import db from "../db";

export const agregarNuevaNota2 = (nota) => ({
  type: types.AGREGAR_NOTA,
  payload: nota,
});

export const setError = (estado) => ({
  type: types.SET_ERROR,
  payload: estado,
});

export const obtenerNotas = () => ({
  type: types.OBTENER_NOTAS,
  payload: db,
});

export const obtenerNotaEliminar = (id) => ({
  type: types.OBTENER_NOTA_A_ELIMINAR,
  payload: id,
});

export const eliminarNota = () => ({ type: types.ELIMINAR_NOTA });

export const obtenerNotaEditar = nota => ({
  type: types.OBTENER_NOTA_A_EDITAR,
  payload: nota,
});

export const editarNota = nota => ({
  type: types.EDITAR_NOTA,
  payload: nota
})
