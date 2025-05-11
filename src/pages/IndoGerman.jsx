import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPlaneArrival, FaUsers, FaMapMarkedAlt, FaHandshake, FaGlobe } from 'react-icons/fa';
import { arrivalImg, welcomeImg, cultureImg, sevaImg, heritageImg, gatkaImg } from '../assets/indo-german/index.js';


function IndoGerman() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const daysData = [
  {
    date: '21 Oct 2017',
    title: 'Arrival of German Delegation',
    icon: <FaPlaneArrival />,
    description:
      'Nine students and 2 teachers from Ricarda Huch Gymnasium, Krefeld, Germany arrived at GHPS India Gate on 21 Oct 2017 and stayed till 27 Oct 2017.',
    image: arrivalImg,
  },
  {
    date: '23 Oct 2017',
    title: 'Welcome Assembly & Sightseeing',
    icon: <FaUsers />,
    description:
      'A cultural programme was presented. Guests visited classrooms, India Gate, Rashtrapati Bhavan, and Dilli Haat for sightseeing and sampling Indian cuisine.',
    image: welcomeImg,
  },
  {
    date: '24 Oct 2017',
    title: 'Cultural Performances & City Tour',
    icon: <FaMapMarkedAlt />,
    description:
      'Special performances showcased India’s rich culture. Visits included Jantar Mantar, Parliament Museum, Wall of Truth, and Cottage Emporium.',
    image: cultureImg,
  },
  {
    date: '25 Oct 2017',
    title: 'Cultural Activities & Service',
    icon: <FaHandshake />,
    description:
      'Morning assembly with cultural items, Rangoli making, and visit to National Gallery of Modern Art, Bangla Sahib Gurdwara, and Baba Baghel Singh Museum. Guests enjoyed Langar and seva.',
    image: sevaImg,
  },
  {
    date: '26 Oct 2017',
    title: 'Awareness Program & Historic Tours',
    icon: <FaGlobe />,
    description:
      'A skit on the harmful effects of crackers and a speech on Diwali. Visits to Red Fort, Jama Masjid, and Qutub Minar were organized.',
    image: heritageImg,
  },
  {
    date: '27 Oct 2017',
    title: 'Gatka Performance & Akshardham Visit',
    icon: <FaUsers />,
    description:
      'A spectacular Gatka performance was presented. Guests visited Akshardham Temple and appreciated its breathtaking beauty.',
    image: gatkaImg,
  },
];


  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-[#81BFDA] mb-4 border-b-4 border-[#FADA7A] inline-block pb-2">
          Indo-German Student Exchange Program
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Guru Harkrishan Public School, India Gate hosted students and teachers from Ricarda Huch Gymnasium, Germany from 21st to 27th October 2017, fostering cultural exchange and international friendship.
        </p>
      </div>

      {/* Timeline Section (Center Line limited to this div) */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#81BFDA]"></div>

        {/* Timeline Cards */}
        <div className="space-y-16">
          {daysData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              data-aos="fade-up"
            >
              {/* Card */}
              <div className="w-full md:w-5/12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold mb-2 text-[#81BFDA]">{item.date}</h3>
                  <h4 className="text-xl font-semibold mb-4 text-[#FADA7A] flex items-center gap-2">
                    {item.icon} {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg mt-4"
                    />
                  )}
                </div>
              </div>

              {/* Dot on the center line */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FADA7A] border-4 border-white rounded-full z-10 flex items-center justify-center shadow-lg">
                <div className="text-[#81BFDA] text-sm">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div
        className="bg-[#f0f8ff] rounded-lg p-8 mt-20 shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#81BFDA]">
          Continuing International Collaboration
        </h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-sm">
          After being approved for the International School Award by the British Council, GHPS India Gate continues to foster global ties through cultural exchange programs. The farewell dinner highlighted the knowledge shared between students and the enthusiasm of school leaders and parents to continue this international journey in the future.
        </p>
      </div>
    </div>
  );
}

export default IndoGerman;
