import React, { useEffect } from 'react';
import { FaBook, FaFlask, FaCalculator, FaDesktop, FaUtensils, FaStore, FaUniversity, FaFirstAid } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const infrastructureData = [
  {
    title: 'Library',
    icon: <FaBook />,
    description: 'The school library boasts of a good and up-to-date stock of over 15,000 text books, reference books, magazines, and journals to enrich curious young minds.',
  },
  {
    title: 'Science Laboratories',
    icon: <FaFlask />,
    description: 'Modern, spacious, and well-equipped laboratories help in imparting practical knowledge in all branches of science.',
  },
  {
    title: 'Math Lab',
    icon: <FaCalculator />,
    description: 'A most modern MATH LAB helps students understand complex mathematical concepts with lab equipment, materials, and demonstration kits.',
  },
  {
    title: 'Computer Lab',
    icon: <FaDesktop />,
    description: 'Computer training is incorporated from Class I onwards, with Computer Science & Informatics Practices offered as elective board subjects at senior secondary level.',
  },
  {
    title: 'Canteen',
    icon: <FaUtensils />,
    description: 'The school has a well-maintained canteen selling snacks, fruit-based drinks, and ice creams at reasonable rates. Strict control is exercised on the quality of eatables.',
  },
  {
    title: 'Uniform & Book Shop',
    icon: <FaStore />,
    description: 'The school has a uniform shop and book shop within the premises for the convenience of parents and students. Prices are fixed by school authorities.',
  },
  {
    title: 'Bank Counter',
    icon: <FaUniversity />,
    description: 'A branch of Punjab & Sind Bank is situated within the school premises, providing parents and students the facility of depositing fees directly in the bank.',
  },
  {
    title: 'Medical Aid',
    icon: <FaFirstAid />,
    description: 'The school has a well-equipped medical room with a full-time Nursing Sister. A thorough medical check-up is done annually, with reports sent to parents.',
  },
];

function Infrastructure() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-[#81BFDA] mb-10 border-b-4 border-[#FADA7A] inline-block pb-2">
        Infrastructure
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {infrastructureData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group"
            data-aos="fade-up"
          >
            <div className="text-5xl text-[#81BFDA] mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 border-b-2 border-[#FADA7A] inline-block pb-1">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infrastructure;
