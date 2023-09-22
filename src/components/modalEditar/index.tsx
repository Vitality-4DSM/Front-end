import React, { useState } from "react";
import { putEstacoes } from '../../utils/axios.routes'
import "./style.css";
import { log } from "console";

interface ModalProps {
  setOpenModalEditar: (value: boolean) => void;
  selectedStationId: string; // Adiciona a propriedade selectedStationId
}

const ModalEditar: React.FC<ModalProps> = ({ setOpenModalEditar, selectedStationId }) => {
  const [stationName, setStationName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [instalacao, setInstalacao] = useState("");
  const [estado, setEstado] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stationName") setStationName(value);
    else if (name === "latitude") setLatitude(value);
    else if (name === "longitude") setLongitude(value);
    else if (name === "instalacao") setInstalacao(value);
    else if (name === "estado") setEstado(value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: selectedStationId,
      identificador: stationName,
      latitude: latitude,
      longitude: longitude,
      instalacao: instalacao,
      status: estado,
    };
    await putEstacoes(data);
    // if (response) {
    //   alert("Estação cadastrada com sucesso!");
    //   setOpenModal(false);
    // } else {
    //   alert("Erro ao cadastrar estação!");
    // }
    window.location.reload();
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="x"
            onClick={() => {
              setOpenModalEditar(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          <h1>Editar Estação</h1>
        </div>
        <div className="body">
          <div className="input-container-1">
            <input className="input-modal" onChange={handleInputChange}
              name="stationName" placeholder="Nome da Estação" />
          </div>
          <div className="flex-input">
            <div className="input-container-2">
              <input className="input-modal" onChange={handleInputChange}
                name="latitude" placeholder="Latitude" />
            </div>
            <div className="input-container-3">
              <input className="input-modal" onChange={handleInputChange}
                name="longitude" placeholder="Longitude" />
            </div>
          </div>
          <div className="flex-input">
            <div className="input-container-2">
              <input className="input-modal" onChange={handleInputChange}
                name="instalacao" placeholder="Data de Instalação" />
            </div>
            <div className="input-container-3">
              <input
                className="input-modal" onChange={handleInputChange}
                name="estado" placeholder="Estado de Atividade"
              />
            </div>
          </div>
          <hr className="HrModal" />
          <div className="title">
            <h1>Parâmetro de Estação</h1>
          </div>
          <div className="body-2">
          <div>
          <div className="input-container-4">
            <input className="input-modal" placeholder="Nome da Estação" type="radio"/>
            <span>Pluviômetro</span>
          </div>
          <div className="input-container-4">
            <input className="input-modal" placeholder="Nome da Estação" type="radio"/>
            <span>Termostato</span>
          </div>
          </div>
          <div>
          <div className="input-container-4">
            <input className="input-modal" placeholder="Nome da Estação" type="radio"/>
            <span>Anemômetros</span>
          </div>
          <div className="input-container-4">
            <input className="input-modal" placeholder="Nome da Estação" type="radio"/>
            <span>Pressâo Atmosférica</span>
          </div>
          </div>
          </div>

        </div>

        <div className="footer">
        <button onClick={handleFormSubmit}>Editar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditar;
