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
import Chuva from '../../components/graficos/lineChart/chuva'
import Umidade from '../../components/graficos/lineChart/humidade'
import { getEstacoes } from "../../utils/axios.routes";
import useLogin from "../../hooks";

const Estacoes: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [estacao, setSelectedEstação] = useState('');
  const [dataInicio, setDataInicio] = useState("")
  const [dataFinal, setDataFinal] = useState("")

  const [temperatura, setTemperatura] = useState(false);
  const [fVento, setfVento] = useState(false);
  const [umidade, setUmidade] = useState(false);
  const [chuva, setChuva] = useState(false);
  const [estacoes, setEstacoes] = useState<any[]>([]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { token } = useLogin();


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
    console.log(estacoes);
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

        <div className="ButtonColumn" style={{ paddingTop: '25px' }}>
          <div className="ButtonRow">
            <div className="clickable-button" onClick={() => setUmidade(!umidade)}>
              <img src={Drops} alt="" />
              {showAllText && <p className="text-under-image">Umidade</p>}
            </div>

            <div className="clickable-button" onClick={() => setChuva(!chuva)}>
              <img src={Rain} alt="" />
              {showAllText && <p className="text-under-image">Chuva</p>}
            </div>

            <div className="clickable-button" onClick={() => setfVento(!fVento)}>
              <img src={Wind} alt="" />
              {showAllText && <p className="text-under-image">Velocidade do Vento</p>}
            </div>
          </div>
        </div>

        <div className="ButtonColumn">
          <div className="ButtonRow">
            <div className="clickable-button" onClick={() => setTemperatura(!temperatura)}>
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

  const handleEstacaoClick = () => {
    console.log("A")
  };
  
  const EstacaoSelect = () => {
    return (
    <>
      <div className="estacaoSelect">
        <ul className="estacoes-list">
          {estacoes.map((estacao) => {
            if (estacao.status === "Ativo") {
              return (
                <div
                  className="estacoes-item"
                  key={estacao.id_estacao}
                  onClick={()=>console.log(estacao.id_estacao)}
                >
                  <h2>{estacao.identificador}</h2>
                  <p>Status: {estacao.status}</p>
                  <p>Latitude: {estacao.latitude}</p>
                  <p>Longitude: {estacao.longitude}</p>
                </div>
              );
            }
            return null;
          })}
        </ul>
        
      </div>
      </>
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
    })
  })

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getEstacoes();
        setEstacoes(response);
      } catch (error) { }
    };
    fetchEstacoes();
  }, []);

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
              <button onClick={openModal2} className="Selectbutton">Selecionar</button>


            </div>
            <div className='filtroRow'>
              <span>Gráficos </span>
              <button onClick={openModal} className="Selectbutton">Selecionar</button>
            </div>
            

          </div>



          <div className="square-container">

            {umidade && (
              <div className="square">
                <Umidade dadosTemperatura={dadosTemperatura} />
              </div>
            )}

            {chuva && (
              <div className="square">
                <Chuva dadosTemperatura={dadosTemperatura} />
              </div>
            )}

            {fVento && (
              <div className="square">
                <Fvento dadosTemperatura={dadosTemperatura} />
              </div>
            )}

            {temperatura && (
              <div className="square">
                <Temperatura dadosTemperatura={dadosTemperatura} />
              </div>
            )}

          </div>

          <ModalT open={isModalOpen} onClose={closeModal}>
            <GrafSelect />
          </ModalT>

          <ModalT open={isModalOpen2} onClose={closeModal2}>
            <EstacaoSelect />
          </ModalT>

        </div>
      </div>
    </>
  );
};

export default Estacoes;
