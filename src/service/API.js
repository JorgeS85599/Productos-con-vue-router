import axios from 'axios';
const baseURL = 'http://localhost:3000';

const productos = {
    getAll: () => axios.get(`${baseURL}/products`),
    getOne: (id) => axios.get(`${baseURL}/products/${id}`),
    create: (item) => axios.post(`${baseURL}/products`, item),
    modify: (item) => axios.put(`${baseURL}/products/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/products/${id}`),
    toogleDone: (item) => axios.put(`${baseURL}/products/${item.id}`, {
      id: item.id,
      title: item.title, 
      done: !item.done
    }),
};

export default {
    productos,
};