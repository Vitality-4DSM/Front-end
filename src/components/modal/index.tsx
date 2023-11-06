import React, { useEffect, useState } from "react";
import {
  getEstacoesId,
  deleteEstacoes,
  getTipoParametros,
  postEstacoes,
  putEstacoes,
  postParameter,
  postTypeParameter,
  putTypeParameter,
  deleteTypeParameter,
  postAlertas,
  getParameter,
  getUserId,
  getParameterID,
} from "../../utils/axios.routes";
import "./style.css";
import user from "../../assets/user.png";
interface ModalProps {
  setOpenModal: (value: boolean) => void;
  modalstyle: string;
  selectStationId: string;
}

const Modal: React.FC<ModalProps> = ({
  setOpenModal,
  modalstyle,
  selectStationId,
}) => {
  const [stationName, setStationName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [instalacao, setInstalacao] = useState("");
  const [estado, setEstado] = useState("");
  const [tipoParametros, setTipoParametros] = useState<any[]>([]);
  const [fk_estacao, setFk_estacao] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fator, setFator] = useState("");
  const [offset, setOffset] = useState("");
  const [sinal, setSinal] = useState("");
  const [id_parametro, setId_parametro] = useState("");
  const [valor, setValor] = useState("");
  const [fktipoparameto, setFktipoparametro] = useState("");
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [json, setJson] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stationName") setStationName(value);
    else if (name === "latitude") setLatitude(value);
    else if (name === "longitude") setLongitude(value);
    else if (name === "instalacao") setInstalacao(value);
    else if (name === "estado") setEstado(value);
    else if (name === "tipoParametros") {
      setFk_estacao([...fk_estacao, value]);
    } else if (name === "nome") setNome(value);
    else if (name === "descricao") setDescricao(value);
    else if (name === "unidade") setUnidade(value);
    else if (name === "fator") setFator(value);
    else if (name === "offset") setOffset(value);
    else if (name === "sinal") setSinal(value);
    else if (name === "id_parametro") setId_parametro(value);
    else if (name === "valor") setValor(value);
    else if (name === "json") setJson(value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      identificador: stationName,
      latitude: latitude,
      longitude: longitude,
      instalacao: instalacao,
      status: estado,
    };
    const estacao = await postEstacoes(data);
    const response = {
      fk_estacao: estacao.id_estacao,
      fk_tipo_parametro: fk_estacao,
    };
    await postParameter(response);
    window.location.reload();
  };
  const handleformEditarPerfil = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: selectStationId,
      nomeUsuario: name,
      email: email,
      senha: senha,
    };
    // await putEstacoes(data);
    // window.location.reload();
  };
  const handleFormSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: selectStationId,
      identificador: stationName,
      latitude: latitude,
      longitude: longitude,
      instalacao: instalacao,
      status: estado,
    };
    await putEstacoes(data);
    window.location.reload();
  };
  const pegarformParametros = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: parseInt(fator),
      offset: parseInt(offset),
      json: json,
      cadastro: "2021-06-01",
    };
    await postTypeParameter(data);
    window.location.reload();
  };

  const pegarformParametrosEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      // id: selectStationId,
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: fator,
      offset: offset,
    };
    await putTypeParameter(data);
    // window.location.reload();
  };

  const handleFormSubmitAlerta = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      valor: valor,
      sinal: sinal,
      fk_parametro: id_parametro,
    };
    await postAlertas(data);
    window.location.reload();
  };

  const handleFormSubmitDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    await deleteEstacoes(selectStationId);
    window.location.reload();
  };

  const handleFormSubmitDeleteParametros = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await deleteTypeParameter(selectStationId);
    window.location.reload();
    return alert(response);
  };
  function Selecionado(id: string) {
    const Parametro = async () => {
      try {
        const response = await getParameter(id);
        setFktipoparametro(response);
      } catch (error) {}
      console.log(fktipoparameto);
    };
    Parametro();
    if (fktipoparameto) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);

        if (modalstyle === "editar-estacao") {
          const response = await getEstacoesId(selectStationId);
          setStationName(response.identificador);
          setLatitude(response.latitude);
          setLongitude(response.longitude);
          setInstalacao(response.instalacao);
          setEstado(response.status);
        } else if (modalstyle === "editar-info") {
          const respons = await getParameterID(selectStationId);
          console.log(respons.tipo_parametro)
          const response = respons.tipo_parametro
          setNome(response.nome);
          setDescricao(response.descricao);
          setUnidade(response.unidade);
          setFator(response.fator);
          setOffset(response.offset);
          setJson(response.json);
        } else if (modalstyle === "Editar-Perfil") {
          const response = await getUserId(getUserId);
          setName(response.nomeUsuario);
          setEmail(response.email);
          setSenha(response.senha);
        }
      } catch (error) {}
    };
    fetchEstacoes();
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="x"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        {modalstyle === "cadastrar-estacao" ||
        modalstyle === "editar-estacao" ? (
          // -------------------------------------------------------------------------------------------------------------------------

          <>
            <div className="title">
              <h1>Cadastro de Estação</h1>
            </div>
            <div className="body">
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="stationName"
                  placeholder="Nome da Estação"
                  value={stationName}
                />
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="latitude"
                    placeholder="Latitude"
                    value={latitude}
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="longitude"
                    placeholder="Longitude"
                    value={longitude}
                  />
                </div>
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="instalacao"
                    placeholder="Data de Instalação"
                    value={instalacao}
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="estado"
                    placeholder="Estado de Atividade"
                    value={estado}
                  />
                </div>
              </div>
              <hr className="HrModal" />
              <div className="title">
                <h1>Parâmetro de Estação</h1>
              </div>
              <div className="body-2">
                {tipoParametros.map((item) => (
                  <>
                    <div
                      className="input-container-4"
                      key={item.id_tipo_parametro}
                    >
                      <input
                        className="checkbox-modal"
                        placeholder="Parametro"
                        value={item.id_tipo_parametro}
                        onChange={handleInputChange}
                        name="tipoParametros"
                        type="checkbox"
                      />
                      <span>{item.nome}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : // ------------------------------------------------------------------------------------------------------------------------------

        modalstyle === "cadastrar-info" || modalstyle === "editar-info" ? (
          <>
            <div className="title">
              <h1>Cadastro de Tipos de Parametros</h1>
            </div>
            <div className="body">
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="nome"
                  placeholder="Nome do Parametro"
                  value={nome}
                />
              </div>
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="descricao"
                  placeholder="Descrição do Parametro"
                  value={descricao}
                />
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="unidade"
                    placeholder="Unidade"
                    value={unidade}
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="fator"
                    placeholder="Fator de conversão"
                    value={fator}
                  />
                </div>
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="offset"
                    placeholder="Offset de conversão"
                    value={offset}
                  />
                </div>
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="json"
                    placeholder="Padrão Json"
                    value={json}
                  />
                </div>
              </div>
              <hr className="HrModal" />
            </div>
          </>
        ) : modalstyle === "cadastrar-alerta" ? (
          <>
            <div className="title">
              <h1>Cadastro de Alertas</h1>
            </div>
            <div className="body">
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="valor"
                  placeholder="Valor do Alerta"
                />
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="sinal"
                    placeholder="Sinal do Alerta"
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="id_parametro"
                    placeholder="ID do Parametro"
                  />
                </div>
              </div>
              <hr className="HrModal" />
            </div>
          </>
        ) : null}
        {modalstyle === "Editar-Perfil" ? (
          <>
            <div className="title">
              <h1>Editar Perfil</h1>
            </div>
            <div className="body">
              <div className="container-pai">
                <img src={user} alt="user" />
                <div className="edit-input-container-1">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Nome do Usuario"
                    value={name}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email do Usuario"
                    value={email}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="senha"
                    placeholder="Senha do Usuario"
                    value={senha}
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="footer">
          {modalstyle === "editar-estacao" ? (
            <button className="delete" onClick={handleFormSubmitDelete}>
              Deletar
            </button>
          ) : modalstyle === "editar-info" ? (
            <button
              className="delete"
              onClick={handleFormSubmitDeleteParametros}
            >
              Deletar
            </button>
          ) : null}

          {modalstyle === "cadastrar-estacao" ? (
            <>
              <div></div>
              <button onClick={handleFormSubmit}>Cadastrar</button>
            </>
          ) : modalstyle === "editar-estacao" ? (
            <button onClick={handleFormSubmitEdit}>Editar</button>
          ) : modalstyle === "cadastrar-info" ? (
            <>
              <div></div>
              <button onClick={pegarformParametros}>Cadastrar</button>
            </>
          ) : modalstyle === "editar-info" ? (
            <button onClick={pegarformParametrosEdit}>Editar</button>
          ) : modalstyle === "cadastrar-alerta" ? (
            <>
              <div></div>
              <button onClick={handleFormSubmitAlerta}>Cadastrar</button>
            </>
          ) : null}

          {modalstyle === "Editar-Perfil" ? (
            <button onClick={handleFormSubmitEdit}>Editar</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
