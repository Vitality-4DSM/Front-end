import api from '../services/axios.config';
import { Response, Request } from 'express'; // Assuming you are using Express.js

// estacoes
export const getEstacoes = async () => {
    try {
        const response = await api.get('/station');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const postEstacoes = async (data: any) => {
    try {
        const response = await api.post('/station', data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const putEstacoes = async (data: any) => {
    try {
        const response = await api.put('/station', data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const delEstacoes = async (data: any) => {
    try {
        const response = await api.delete('/station', data);
        return response.data;
    } catch (error) {
        return error;
    }
}

/////////////////////////////////////////////////////////////

export const getAlertas = async () => {
    try {
        const response = await api.get('/alert');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getTipoParametros = async () => {
    try {
        const response = await api.get('/typeparameter');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getUser = async () => {
    try {
        const response = await api.get('/user');
        return response.data;
    } catch (error) {
        return error;
    }
};

export const teste = async () => {
    console.log("testando");
}


export const GetUsers = async () => {
    const response = await api.get('/user/');
    return response.data;
}