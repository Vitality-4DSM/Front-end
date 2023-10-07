import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles.css";
import { getTipoParametros } from "../../utils/axios.routes";
import Modal from "../../components/modal";
import useLogin from "../../hooks";

const Info: React.FC = () => {
  const [tipoparametros, setTipoParametros] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */
  const [modalOpen, setOpenModal] = useState(false);
  const [modalstyle, setModalStyle] = useState("");
  const [selectStationId, setSelectStationId] = useState("");

  const { token } = useLogin();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
  };

  useEffect(() => {
    const getparametros = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);
      } catch (error) {
        return error;
      }
    };
    getparametros();
  }, []);

  return (
    <>
      {modalOpen ? (
        <Modal
          setOpenModal={setOpenModal}
          modalstyle={modalstyle}
          selectStationId={selectStationId}
        />
      ) : null}
      <div className={`flex ${showSidebar ? "shifted" : ""}`}>
        <Sidebar isOpen={showSidebar} />
        <div className="info-container">
          <div className="info-title">
            <button className="toggle-button" onClick={toggleSidebar}>
              {showSidebar ? <ClearIcon /> : <DehazeIcon />}
            </button>
            <span>Informações Didáticas</span>
            {token &&
              <div className="cadastro-botão">
                <button
                  type="submit"
                  className="btn-cadastro"
                  onClick={() => {
                    setOpenModal(true);
                    setModalStyle("cadastrar-info");
                  }}
                >
                  Cadastrar
                </button>
              </div>
            }
          </div>
          
          <div className="slide-container"  


          <div className="box-container">
            {tipoparametros.length === 0 ? (
              <div className="info-box">
                <details className="details">
                  <summary className="summary">
                    Não existem tipos de parametros cadastrados
                  </summary>
                </details>
              </div>
            ) : (token ? (
              tipoparametros.map((item) => (
                <div className="box-item" key={item.id_tipo_parametro}>
                  <div onClick={() => {
                    setOpenModal(true)
                    setModalStyle("editar-info")
                    setSelectStationId(item.id_tipo_parametro)
                  }}
                    className="image" />
                  <div className="box-info">
                    <h2>O que é {item.nome}</h2>
                    <hr className="line"></hr>
                    <p>{item.descricao}</p>
                  </div>
                </div>
              ))) : (tipoparametros.map((item) => (
                <div className="box-item" key={item.id_tipo_parametro}>
                  <div className="image" />
                  <div className="box-info">
                    <h2>O que é {item.nome}</h2>
                    <hr className="line"></hr>
                    <p>{item.descricao}</p>
                  </div>
                </div>))
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
