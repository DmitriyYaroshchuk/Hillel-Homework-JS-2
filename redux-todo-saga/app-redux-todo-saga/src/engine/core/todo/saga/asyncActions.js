import {createAction} from "@reduxjs/toolkit";

export const todoAsyncActions = Object.freeze({
    getTodoAsync: createAction('GET_TODO_ASYNC'),
    addTodoAsync: createAction('ADD_TODO_ASYNC'),
    removeTodoAsync: createAction('REMOVE_TODO_ASYNC'),
    editTodoAsync: createAction('EDIT_TODO_ASYNC'),
    saveTodoAsync: createAction('SAVE_TODO_ASYNC'),
});