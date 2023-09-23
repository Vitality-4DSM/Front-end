import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/axios.routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        // Armazene o token JWT no armazenamento local do navegador após o login bem-sucedido
        localStorage.setItem("token", response.token);
        navigate("/perfil");
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
