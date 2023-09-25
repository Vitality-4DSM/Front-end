import { createContext, useEffect, useState } from "react";
import { LoginParams } from "../types";

export const LoginContext = createContext({} as LoginParams); // Cria o contexto de login

export function Provider({ children }: any) { // Cria o provedor de login
    const [token, setToken] = useState<string>(""); // Cria o estado do token
    useEffect(() => {
        const token = localStorage.getItem("@token"); // Pega o token do armazenamento local do navegador
        if (token) { // Se existir um token
            setToken(token); // Seta o token no estado
            console.log("Token setado")
        }
    }, []);

    const writeToken = (token: string) => { // Função para escrever o token no estado
        if (token) {
            // Armazene o token JWT no armazenamento local do navegador após o login bem-sucedido
            localStorage.setItem("@token", token);
            setToken(token);
            console.log("Token escrito")
        }
    };

    return (
        <LoginContext.Provider value={{ token , writeToken}} >
            {children}
        </LoginContext.Provider>
    )
};
