import React, { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import { getAlertas, gethistoric } from "../../utils/axios.routes";
import Sidebar from "../../components/sidebar";
import Modal from "../../components/modal";
import useLogin from "../../hooks";
import back from "../../assets/icons/BackBt.svg";
import next from "../../assets/icons/NextBt.svg";
import { toast } from "react-toastify";

const Alertas: React.FC = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [modalstyle, setModalStyle] = useState("");
  const [selectStationId, setSelectStationId] = useState("");
  const [alerta, setAlerta] = useState<any[]>([]);

  const [Pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(0);
  const [maxPages, setmaxPages] = useState(0);
  const [historic, setHistoric] = useState<any[]>([]);

  const [page2, setPage2] = useState(0);
  const [maxPages2, setmaxPages2] = useState(0);

  const [showSidebar, setShowSidebar] = useState(true);
  const { token } = useLogin();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
  };
  const itemsPerPage = 6;
  const itemsPerPage2 = 16;

  const resetPage = () => {
    setPage(0);
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const startIndex2 = page2 * itemsPerPage2;
  const endIndex2 = startIndex2 + itemsPerPage2;

  const handleNextPageClick = () => {
    if (page >= maxPages - 1) {
      toast.error(`Não há mais páginas.`, {
        position: "top-right",
      });
    } else {
      setPage(page + 1);
    }
  };

  const handleNextPageClick2 = () => {
    if (page2 >= maxPages2 - 1) {
      toast.error(`Não há mais páginas.`, {
        position: "top-right",
      });
    } else {
      setPage2(page2 + 1);
    }
  };

  const handlePrevPageClick = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      toast.error(`Página já está no inicio.`, {
        position: "top-right",
      });
    }
  };

  const handlePrevPageClick2 = () => {
    if (page2 > 0) {
      setPage2(page2 - 1);
    } else {
      toast.error(`Página já está no inicio.`, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const fetchAlertas = async () => {
      try {
        const response = await gethistoric();
        setHistoric(response);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchEstacoes = async () => {
      try {
        const response = await getAlertas();
        setAlerta(response);
      } catch (error) {
        console.log(error)
      }
    };

    fetchAlertas();
    fetchEstacoes();

    const maxPage =
      historic.length <= itemsPerPage
        ? 1
        : Math.ceil(historic.length / itemsPerPage);
    setmaxPages(maxPage);

    const maxPage2 =
      alerta.length <= itemsPerPage2
        ? 1
        : Math.ceil(alerta.length / itemsPerPage2);
    setmaxPages2(maxPage2);
  }, [alerta]);

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
            {token && (
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
            )}
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
            <>
              <div className="Alertas-container">
                <details className="details">
                  <summary className="summary">Alertas ativos</summary>
                </details>
              </div>
              <div className="centraliza">
                <div className="alertBox">
                  {alerta.slice(startIndex2, endIndex2).map((item) => {
                    if (item.id_alerta != null) {
                      return (
                        <div
                          key={item.id_alerta}
                          className="alertaItem"
                          onClick={() => {
                            console.log(item.id_alerta);
                          }}
                        >
                          <h2>ID: {item.id_alerta}</h2>
                          <p>Valor: {item.valor}</p>
                          <p>Tipo: {item.TipoDeAlerta}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <div className="arruma">
                  <a className="button-1" onClick={handlePrevPageClick2}>
                    {" "}
                    <img src={back} alt="botão de previo" />
                  </a>
                  <h2>
                    {page2 + 1}/{maxPages2}
                  </h2>
                  <a className="button-1" onClick={handleNextPageClick2}>
                    {" "}
                    <img src={next} alt="botão de próximo" />
                  </a>
                </div>
              </div>
            </>
          )}

          <div className="Alertas-container">
            <details className="details">
              <summary className="summary">Histórico de Alertas</summary>
            </details>
            {historic.length > 0 && (
              <div className="centraliza">
                <div className="boxSelect">
                  <input
                    className="pesquisaInput"
                    type="text"
                    placeholder="⌕ Pesquisar: "
                    onChange={(e) => {
                      {
                        setPesquisa(e.target.value);
                        resetPage();
                      }
                    }}
                  />

                  <tbody>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>ID Alerta</th>
                        <th>ID Valor</th>
                      </tr>
                    </thead>

                    {historic
                      .filter((item: { nome: string }) => {
                        if (Pesquisa === "") {
                          return item;
                        } else if (
                          item.nome
                            .toLocaleLowerCase()
                            .includes(Pesquisa.toLocaleLowerCase())
                        ) {
                          return item;
                        }
                      })
                      .slice(startIndex, endIndex)
                      .map((item: any, id: number) => {
                        const dataFormatada = new Date(
                          item.data
                        ).toLocaleDateString("pt-BR");
                        return (
                          <tr key={id}>
                            <td>{item.id_historico}</td>
                            <td> {dataFormatada}</td>
                            <td>{item.fk_alerta}</td>
                            <td>{item.fk_valor}</td>
                          </tr>
                        );
                      })}
                    <div className="pageButtom">
                      <div className="arruma">
                        <a className="button-1" onClick={handlePrevPageClick}>
                          {" "}
                          <img src={back} alt="botão de previo" />
                        </a>
                        <h2>
                          {page + 1}/{maxPages}
                        </h2>
                        <a className="button-1" onClick={handleNextPageClick}>
                          {" "}
                          <img src={next} alt="botão de próximo" />
                        </a>
                      </div>
                    </div>
                  </tbody>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alertas;
