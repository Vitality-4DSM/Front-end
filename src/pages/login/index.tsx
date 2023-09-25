import React, { useContext, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/axios.routes";
import { LoginContext } from "../../contexts/LoginContexts";
import useLogin from "../../hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { writeToken, token } = useLogin();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: email,
      senha: password,
    };

    try {
      const response = await login(data);
      console.log(response);

      if (response.token) {
        writeToken(response.token);
        // localStorage.setItem("token", response.token);
        if (token) {
          navigate("/perfil");
        }
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }


  };
  const handlePublic = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      navigate("/estacoes");
    } catch (error) {
      console.error("Erro ao entrar no perfil publico", error);
    }
  }

  return (
    <div className="login">
      <form action="">
        <div className="container">
          <div className="input">
            <div className="titulo">
              <h1> Login </h1>
            </div>
            <hr />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="botaoLogin">
              <p>Entrar</p>
            </button>
            <hr />
            <button onClick={handlePublic} className="botaoPublico">
              <p>Entrar sem logar</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
