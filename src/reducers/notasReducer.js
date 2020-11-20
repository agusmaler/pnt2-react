import { types } from "../types/types";

const initialState = {
  notas: [],
  error: null,
  notaeliminar: null,
  notaeditar: null,
};

export const notasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AGREGAR_NOTA:
      return {
        ...state,
        error: null,
        notas: [...state.notas, action.payload],
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.OBTENER_NOTAS:
      return {
        ...state,
        error: null,
        notas: action.payload,
      };

    case types.OBTENER_NOTA_A_ELIMINAR:
      return {
        ...state,
        notaeliminar: action.payload,
      };

    case types.ELIMINAR_NOTA:
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== state.notaeliminar),
        notaeliminar: null,
      };

    case types.OBTENER_NOTA_A_EDITAR:
      return {
        ...state,
        notaeditar: action.payload
      }  
    case types.EDITAR_NOTA:
      return {
        ...state,
        notaeditar: null,
        notas: state.notas.map(nota => nota.id === action.payload.id ? nota = action.payload : nota   )
      }  

    default:
      return state;
  }
};
