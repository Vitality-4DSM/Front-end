import React from "react";
import "./style.css";

interface ModalProps {
  setOpenModal: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="x"
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
            <input className="input-modal" placeholder="Nome da Estação" />
          </div>
          <div className="flex-input">
            <div className="input-container-2">
              <input className="input-modal" placeholder="Latitude" />
            </div>
            <div className="input-container-3">
              <input className="input-modal" placeholder="Longitude" />
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
          <button>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
