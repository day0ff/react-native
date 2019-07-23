import { ADD_TODO, DELETE_TODO } from './action-types';

export const addTodo = todo => ({type: ADD_TODO, todo});
export const deleteTodo = index => ({type: DELETE_TODO, index});

