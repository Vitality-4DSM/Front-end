import React, { useEffect, useRef, useState } from "react";
import * as Highcharts from 'highcharts';
import "./style.css";



const Modal: React.FC = ({}) => {
  let teste='aaaaaaaaaa'
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

         
        if (chartContainerRef3.current) {
    
          const dadosGraficoTemperatura = dadosTemperatura.map((item) => ({
            x: new Date(item.date).getTime(),
            y: item.temperaturaMaxima,
          }));
      
          const dadosGraficoTemperaturaMinima = dadosTemperatura.map((item) => ({
            x: new Date(item.date).getTime(),
            y: item.temperaturaMinima,
          }));
      
          Highcharts.chart(chartContainerRef3.current, {
            chart: {
              type: 'line',
              backgroundColor: '#0000',
            },
            
            title: {
              text: 'Temperatura dos últimos 10 dias',
              style: {
                color: 'white', 
              },
            },
            xAxis: {
              type: 'datetime', 
              gridLineWidth: 1,
              labels: {
                style: {
                  color: 'white', 
                },
              },
              
            },
            yAxis: {
              gridLineWidth: 1, 
              title: {
                text: 'Temperatura C°', 
              },
              labels: {
                style: {
                  color: 'white', 
                },
              },
            },
            legend: {
              itemStyle: {
                color: 'white', 
              },
            },
    
            series: [
              {
                type: 'line', 
                name: 'Temperatura Máxima',
                data: dadosGraficoTemperatura,
                color: '#aa0000',
              },
              {
                type: 'line', 
                name: 'Temperatura Mínima',
                data: dadosGraficoTemperaturaMinima,
                color: '#4ae',
              },
            ],
          });
        }
    }, []);
    
      const chartContainerRef3 = useRef<HTMLDivElement>(null);
    
  return (
    <div className="square1"  ref={chartContainerRef3}></div>
    
  );
};

export default Modal;
