import React, { useEffect, useState } from "react";
import {
  deleteEstacoes,
  getTipoParametros,
  postEstacoes,
  putEstacoes,
  postParameter,
} from "../../utils/axios.routes";
import "./style.css";

interface ModalProps {
  setOpenModal: (value: boolean) => void;
  modalstyle: boolean;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stationName") setStationName(value);
    else if (name === "latitude") setLatitude(value);
    else if (name === "longitude") setLongitude(value);
    else if (name === "instalacao") setInstalacao(value);
    else if (name === "estado") setEstado(value);
    else if (name === "tipoParametros") {
      console.log(value);
      setFk_estacao([...fk_estacao, value]);}
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
    const response ={ 
      fk_estacao: estacao.id_estacao,
      fk_tipo_parametro: fk_estacao
    }
    // console.log(response);
    const resp =await postParameter(response);
    console.log(resp);
    // console.log(fk_estacao);
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
    const response = await putEstacoes(data);
    console.log(response);
    // window.location.reload();
  };

  const handleFormSubmitDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await deleteEstacoes(selectStationId);
    // console.log(response);
    window.location.reload();
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);
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
            />
          </div>
          <div className="flex-input">
            <div className="input-container-2">
              <input
                className="input-modal"
                onChange={handleInputChange}
                name="latitude"
                placeholder="Latitude"
              />
            </div>
            <div className="input-container-3">
              <input
                className="input-modal"
                onChange={handleInputChange}
                name="longitude"
                placeholder="Longitude"
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
              />
            </div>
            <div className="input-container-3">
              <input
                className="input-modal"
                onChange={handleInputChange}
                name="estado"
                placeholder="Estado de Atividade"
              />
            </div>
          </div>
          <hr className="HrModal" />
          <div className="title">
            <h1>Parâmetro de Estação</h1>
          </div>
          <div className="body-2">
            {tipoParametros.map((item) => (
              <div>
                <div className="input-container-4" key={item.id_tipo_parametro}>
                  <input
                    className="input-modal"
                    placeholder="Nome da Estação"
                    value={item.id_tipo_parametro}
                    onChange={handleInputChange}
                    name="tipoParametros"
                    type="checkbox"
                  />

                  <span>{item.nome} {item.id_tipo_parametro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          {!modalstyle ? (
            <button className="delete" onClick={handleFormSubmitDelete}>
              Deletar
            </button>
          ) : null}

          {modalstyle ? (
            <>
              <div></div>
              <button onClick={handleFormSubmit}>Cadastrar</button>
            </>
          ) : (
            <button onClick={handleFormSubmitEdit}>Editar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
