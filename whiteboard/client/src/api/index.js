import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchBoard = () => axios.get(url);
export const addProject = (newData) => axios.post(url, newData);