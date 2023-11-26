import React, { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import { getAlertas } from "../../utils/axios.routes";
import Sidebar from "../../components/sidebar";
import Modal from "../../components/modal";
import useLogin from "../../hooks";

const Alertas: React.FC = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [modalstyle, setModalStyle] = useState("");
  const [selectStationId, setSelectStationId] = useState("");
  const [alerta, setAlerta] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */

  const { token } = useLogin();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getAlertas();
        setAlerta(response);
      } catch (error) { }
    };
    fetchEstacoes();
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
        <div className="alert-container">
          <div className="alert-title">
            <button className="toggle-button" onClick={toggleSidebar}>
              {showSidebar ? <ClearIcon /> : <DehazeIcon />}
            </button>
            <span>Alertas</span>
            {token &&
              <div className="cadastro-botão">
                <button
                  type="submit"
                  className="btn-cadastro"
                  onClick={() => {
                    setOpenModal(true);
                    setModalStyle("cadastrar-alerta");
                  }}
                >
                  Cadastrar
                </button>
              </div>
            }
          </div>

          {alerta.length === 0 ? (
            <div className="Alertas-container">
              <details className="details">
                <summary className="summary">
                  Não existem alertas cadastrados
                </summary>
              </details>
            </div>
          ) : (
            alerta.map((item) => (
              <div className="Alertas-container" key={item.id_alerta}>
                <details className="details">
                  <summary className="summary">{item.id_alerta}</summary>
                  <p>
                    {item.valor}, {item.sinal}
                  </p>
                </details>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Alertas;
