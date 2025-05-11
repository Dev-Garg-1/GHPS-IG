import React from 'react';
import {isaAccreditation, lungFoundation, esowCycling, guruDrona, britishCouncil} from '../assets/proud/index.js';

const events = [
  {
    title: 'ISA Accreditation (2020-23)',
    description: `GHPS, INDIA GATE added yet another feather to its cap wherein it was conferred ISA ACCREDITATION (2020-23), for outstanding development of the International Dimension in the curriculum...`,
    img: isaAccreditation,
  },
  {
    title: 'Best Presentation - Lung Care Foundation',
    description: `The School won the Best Presentation Award in the Inter-School Competition organised by Lung Care Foundation...`,
    img: lungFoundation,
  },
  {
    title: 'World No. 1 Cyclist - Esow',
    description: `GHPS, India Gate is proud of its student, Esow India's star cyclist and ranked World No 1...`,
    img: esowCycling,
  },
  {
    title: 'GURU DRONA AWARD 2018',
    description: `Principal, Ms. D. K. Dhingra was conferred with GURU DRONA AWARD-2018 for her valuable contribution to education...`,
    img: guruDrona,
  },
  {
    title: 'British Council International Award',
    description: `GHPS, India Gate was conferred with the British Council INTERNATIONAL SCHOOL AWARD 2017-2020 for outstanding development of the international dimension.`,
    img: britishCouncil,
  },
];

const bgColors = ['#B1F0F7', '#81BFDA', '#F5F0CD', '#FADA7A'];

const ProudMoments = () => {
  return (
    <div className="relative bg-white min-h-screen px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-[#243746]">Proud Moments</h1>

      {/* Decorative line */}
      <div className="flex justify-center mt-2 mb-16">
        <div className="h-1 w-24 bg-[#FADA7A] rounded-full animate-pulse"></div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div>

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`mb-20 flex ${isLeft ? 'justify-start' : 'justify-end'} relative z-10`}>
              <div className="w-1/2 flex flex-col items-center group">
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 rounded-full w-6 h-6 border-4 border-white z-20"
                  style={{ backgroundColor: bgColors[index % bgColors.length] }}
                ></div>
                <div
                  className={`shadow-xl rounded-lg p-6 mt-2 w-[90%] transition-all duration-500 ease-in-out transform group-hover:scale-105 ${
                    isLeft ? 'ml-auto text-left' : 'mr-auto text-left'
                  }`}
                  style={{ backgroundColor: bgColors[index % bgColors.length] }}
                >
                  <img src={event.img} alt={event.title} className="rounded-md w-full h-48 object-cover mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProudMoments;
