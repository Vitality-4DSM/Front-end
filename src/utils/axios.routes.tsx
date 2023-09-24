import api from "../services/axios.config";
import { Response, Request } from "express"; // Assuming you are using Express.js

// estacoes
export const getEstacoes = async () => {
  try {
    const response = await api.get("/station");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postEstacoes = async (data: any) => {
  try {
    const response = await api.post("/station", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const putEstacoes = async (data: any) => {
  try {
    const response = await api.put("/station", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteEstacoes = async (id: any) => {
  try {
    const response = await api.delete("/station/" + id);
    return response;
  } catch (error) {
    return error;
  }
};


/////////////////////////////////////////////////////////////

// parametros
export const postTypeParameter = async (data: any) => {
  try {
    const response = await api.post("/typeparameter", data);
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const putTypeParameter = async (data: any) => {
  try {
    const response = await api.put("/typeparameter", data);
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const deleteTypeParameter = async (id: any) => {
  try {
    const response = await api.delete("/typeparameter/" + id);
    return response;
  } catch (error) {
    return error;
  }
};

/////////////////////////////////////////////////////////////

export const login = async (data:any) => {
  try {
    const response = await api.post("/login",data);
    return response.data;
  } catch (error) {
    return error;
  }
}




export const getAlertas = async () => {
  try {
    const response = await api.get("/alert");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTipoParametros = async () => {
  try {
    const response = await api.get("/typeparameter");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetUsers = async () => {
  const response = await api.get("/user/");
  return response.data;
};


// transforme fk_tipo_parametro em inteiro
export const postParameter = async (data: any) => {
  try {
    const { fk_tipo_parametro , fk_estacao } = data;
    for (let i = 0; i < fk_tipo_parametro.length; i++) {
      const response = await api.post("/parameter", { fk_estacao: parseInt(fk_estacao),
        fk_tipo_parametro: parseInt(fk_tipo_parametro[i]),
      });
    }
    // const response = await api.post("/parameter", data);
    return data;
  } catch (error) {
    return error;
  }
}