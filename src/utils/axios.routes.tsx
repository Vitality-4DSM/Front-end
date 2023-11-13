import api from "../services/axios.config";
import { Response, Request } from "express"; // Assuming you are using Express.js

// tirar o D se houver no começo do arquivo e colocar no outro arquivo axios.routes, pra usar o backend no servidor online, o qual deve estar em execução

// estacoes
export const getEstacoes = async () => {
  try {
    const response = await api.get("http://34.193.65.107:3000/station", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getEstacoesId = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/station/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const postEstacoes = async (data: any) => {
  try {
    const response = await api.post("http://34.193.65.107:3000/station", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const putEstacoes = async (data: any) => {
  try {
    const response = await api.put("http://34.193.65.107:3000/station", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteEstacoes = async (id: any) => {
  try {
    const response = await api.delete("http://34.193.65.107:3000/station/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response;
  } catch (error) {
    return error;
  }
};


/////////////////////////////////////////////////////////////

// parametros
export const postTypeParameter = async (data: any) => {
  try {
    const response = await api.post("http://34.193.65.107:3000/typeparameter", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const getTipoParametros = async () => {
  try {
    const response = await api.get("http://34.193.65.107:3000/typeparameter", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTipoParametroID = async (id:any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/typeparameter"+ id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};


export const putTypeParameter = async (data: any) => {
  try {
    const response = await api.put("http://34.193.65.107:3000/typeparameter", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const deleteTypeParameter = async (id: any) => {
  try {
    const response = await api.delete("http://34.193.65.107:3000/typeparameter/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response;
  } catch (error) {
    return error;
  }
};

/////////////////////////////////////////////////////////////

export const postUsuario = async (data:any) => {
  try{
    const response = await api.post("http://34.193.65.107:3000/user", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch(error){
    return error;
  }
}


export const deleteUsuario = async (id:any) =>{
  try{
    const response = await api.delete("http://34.193.65.107:3000/user/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response;
  } catch(error){
    return error;
  }
}

export const updateUsuario = async (data:any) =>{
  try{
    const response = await api.put("http://34.193.65.107:3000/user", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch(error){
    return error;
  }
}

export const getUsuarioEmail = async (email:any) =>{
  try{
    const response = await api.get("http://34.193.65.107:3000/user/email/" + email, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch(error){
    return error;
  }
}


/////////////////////////////////////////////////////////////

export const login = async (data:any) => {
  try {
    const response = await api.post("http://34.193.65.107:3000/login",data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
}


export const postAlertas = async (data: any) => {
  try {
    const response = await api.post("http://34.193.65.107:3000/alert", data, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getAlertas = async () => {
  try {
    const response = await api.get("http://34.193.65.107:3000/alert", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetUsers = async () => {
  try {
    const response = await api.get("http://34.193.65.107:3000/user", {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUserId = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/user/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

// transforme fk_tipo_parametro em inteiro
export const postParameter = async (data: any) => {
  try {
    const { fk_tipo_parametro , fk_estacao } = data;
    for (let i = 0; i < fk_tipo_parametro.length; i++) {
      await api.post("http://34.193.65.107:3000/parameter", { fk_estacao: parseInt(fk_estacao),
        fk_tipo_parametro: parseInt(fk_tipo_parametro[i]),
      }, {
        headers: {
          "x-api-key": "4554545sdsdsd5454",
        },
      
      });
    }
    return data;
  } catch (error) {
    return error;
  }
}

export const getParameter = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/parameter/fkparameter",{
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    }  );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getParameterID = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/parameter/"+ id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDashboard = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/dashboard/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    } );
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export const getNometabela = async (id: any) => {
  try {
    const response = await api.get("http://34.193.65.107:3000/dashboard/nometabela/" + id, {
      headers: {
        "x-api-key": "4554545sdsdsd5454",
      },
    
    } );
    return response.data;
  }
  catch (error) {
    return error;
  }
}
