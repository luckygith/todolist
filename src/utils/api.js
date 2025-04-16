import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getTodos = () => axios.get(`${baseUrl}/get`);

export const updateTodo = (id) => axios.put(`${baseUrl}/update/${id}`);

export const createTodo = (data) => axios.post(`${baseUrl}/add`, data);

export const deleteTodo = (id) => axios.delete(`${baseUrl}/delete/${id}`);

export const createList = (data) => axios.post(`${baseUrl}/addlist`);

export const getLists = () => axios.get(`${baseUrl}/getLists`);
