import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchBoard = () => axios.get(url);
export const addProject = (newData) => axios.post(url, newData);
export const updateProject = (id, updatedProject) => axios.patch(`${url}/${id}`, updatedProject);
export const deletePost = (id) => axios.delete(`${url}/${id}`);