import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Sidebar from "../../components/sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import * as Highcharts from 'highcharts';

import { Padding } from "@mui/icons-material";
import ModalT from '../../components/ModalGraficos/Modal'
import Drops from '../../assets/icons/waterDrpos.svg'
import Info from '../../assets/icons/Info.svg'
import Rain from '../../assets/icons/Rain.svg'
import Thermo from '../../assets/icons/Thermometer.svg'
import Wind from '../../assets/icons/Wind.svg'

import Temperatura from '../../components/graficos/lineChart/temperatura'
import Fvento from '../../components/graficos/lineChart/fVento'

const Estacoes: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [estacao, setSelectedEstação] = useState('');
  const [dataInicio, setDataInicio] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [temperatura, setTemperatura] = useState(false);
  const [fVento, setfVento] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  function handleChangeOptionEstação(event: any) {
    setSelectedEstação(event.target.value);
  }


  interface dadosTemperatura {
    date: string;
    temperaturaMaxima: number;
    temperaturaMinima: number;
  }

  const dadosTemperatura: dadosTemperatura[] = [
    {
      date: "2023-10-01",
      temperaturaMaxima: 25,
      temperaturaMinima: 12,
    },
    {
      date: "2023-10-02",
      temperaturaMaxima: 27,
      temperaturaMinima: 15,
    },
    {
      date: "2023-10-03",
      temperaturaMaxima: 22,
      temperaturaMinima: 11,
    },
    {
      date: "2023-10-04",
      temperaturaMaxima: 28,
      temperaturaMinima: 14,
    },
    {
      date: "2023-10-05",
      temperaturaMaxima: 24,
      temperaturaMinima: 13,
    },
    {
      date: "2023-10-06",
      temperaturaMaxima: 26,
      temperaturaMinima: 16,
    },
    {
      date: "2023-10-07",
      temperaturaMaxima: 23,
      temperaturaMinima: 10,
    },
    {
      date: "2023-10-08",
      temperaturaMaxima: 30,
      temperaturaMinima: 17,
    },
    {
      date: "2023-10-09",
      temperaturaMaxima: 29,
      temperaturaMinima: 18,
    },
    {
      date: "2023-10-10",
      temperaturaMaxima: 31,
      temperaturaMinima: 19,
    },

  ];


  const chartContainerRef1 = useRef<HTMLDivElement>(null);
  const chartContainerRef2 = useRef<HTMLDivElement>(null);


  const [showAllText, setShowAllText] = useState(false);

  const toggleAllText = () => {
    setShowAllText(!showAllText);
  };




  const GrafSelect = () => {
    return (
      <div className="modal-content">

        <div className="ButtonColumn">
          <div className="ButtonRow">
            <div className="clickable-button" onClick={() => console.log('Clicked')}>
              <img src={Drops} alt="" />
              {showAllText && <p className="text-under-image">Humidade</p>}
            </div>
            <div className="clickable-button" onClick={() => console.log('Clicked')}>
              <img src={Rain} alt="" />
              {showAllText && <p className="text-under-image">Chuva</p>}
            </div>
            <div className="clickable-button" onClick={() => setfVento(!fVento)}>
              <img src={Wind} alt="" />
              {showAllText && <p className="text-under-image">Força do Vento</p>}
            </div>
          </div>
        </div>

        <div className="ButtonColumn">
          <div className="ButtonRow">
            <div className="clickable-button" onClick={() => console.log(setTemperatura(!temperatura))}>
              <img src={Thermo} alt="" />
              {showAllText && <p className="text-under-image">Temperatura</p>}
            </div>
          </div>
        </div>

        <div className="info-button" onClick={toggleAllText}>
          <img src={Info} alt="" />
        </div>

      </div>

    );

  }



  useEffect(() => {
    Highcharts.setOptions({
      lang: {
        months: [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
          "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        shortMonths: [
          "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        weekdays: [
          "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
        ],
        shortWeekdays: [
          "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
        ]
      }
    });
  })

  return (
    <>
      <div className={`flex ${showSidebar ? "shifted" : ""}`}>
        <Sidebar isOpen={showSidebar} />
        <div className="estacoes-container">
          <div className="estacoes-title">
            <button className="toggle-button" onClick={toggleSidebar}>
              {showSidebar ? <ClearIcon /> : <DehazeIcon />}
            </button>
          </div>

          <div className="boxDate Filtrospan" >
            <div className='row'>
              <span className="dateSpan ">Data de Início </span>
              <input type="date" onChange={(e) => setDataInicio(e.target.value)} className="selectStyle" />
            </div>
            <div className='row'>
              <span>Data de Término </span>
              <input type="date" onChange={(e) => setDataFinal(e.target.value)} className="selectStyle" />
            </div>

          </div>

          <div className="boxFiltro Filtrospan">
            <div className='filtroRow'>
              <span>Estação </span>
              <button onClick={openModal} className="Selectbutton">Selecionar</button>


            </div>
            <div className='filtroRow'>
              <span>Gráficos </span>
              <button onClick={openModal} className="Selectbutton">Selecionar</button>
            </div>

          </div>



          <div className="square-container">

          {temperatura && (
              <div className="square">
                <Temperatura dadosTemperatura={dadosTemperatura} />
              </div>
            )}


            {fVento && (
              <div className="square">
                <Fvento dadosTemperatura={dadosTemperatura} />
              </div>
            )}


          </div>

          <ModalT open={isModalOpen} onClose={closeModal}>
            <GrafSelect />
          </ModalT>

        </div>
      </div>
    </>
  );
};

export default Estacoes;
