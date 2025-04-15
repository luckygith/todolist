import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getTodos = () => axios.get(`${baseUrl}/get`);

export const udpateTodo = (id) => axios.put(`${baseUrl}/update/${id}`);

export const createTodo = (data) => axios.post(`${baseUrl}/add`, data);

export const deleteTodo = (id) => axios.delete(`${baseUrl}/delete/${id}`);
