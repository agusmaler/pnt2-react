
import { combineReducers } from 'redux';
import { notasReducer } from './notasReducer';


export default combineReducers({
    notas: notasReducer
});