import React from "react";
import "./style.css";

interface ModalProps {
  setOpenModalEditar: (value: boolean) => void;
}

const ModalEditar: React.FC<ModalProps> = ({ setOpenModalEditar }) => {
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
            <input className="input-modal" placeholder="Editar Nome da Estação" />
          </div>
          <div className="flex-input">
            <div className="input-container-2">
              <input className="input-modal" placeholder="Editar Latitude" />
            </div>
            <div className="input-container-3">
              <input className="input-modal" placeholder="Editar Longitude" />
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
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditar;
