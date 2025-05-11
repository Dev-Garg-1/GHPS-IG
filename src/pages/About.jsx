import React from 'react';
import {schoolImg} from '../assets/infra/index.js';

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-[#81BFDA] mb-8 border-b-4 border-[#FADA7A] inline-block pb-2">
        ABOUT GHPS INDIA GATE
      </h1>

      <div className="my-6">
          <img
            src={schoolImg}
            alt="GHPS India Gate"
            className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
          />
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          GURU HARKRISHAN PUBLIC SCHOOL INDIA GATE is a progressive English Medium Co-educational Senior Secondary School affiliated to the Central Board of Secondary Education (CBSE). Referred to as the ‘Mother School’ of all Guru Harkrishan Public Schools, it is the first school to be established in 1965 by Delhi Sikh Gurudwara Management Committee with an aim to impart quality education and establish positive attitude amongst children in an enlightened environment, imbibing ethos and ethics of Sikhism.
        </p>
      </section>

      {/* Section 2: Location */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Location
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Located in the heart of the city, the school is close to India Gate and other historic places like Purana Quila, National Stadium, National Gallery of Modern Art and Patiala House.
        </p>
      </section>

      {/* Section 3: Facilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Facilities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The school is housed in a most modern & spacious building. It provides a very congenial environment with excellent facilities for sports & co-curricular activities, ensuring holistic development of students.
        </p>
      </section>

      {/* Section 4: Leadership */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Leadership
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The school is running under the guidance of Chairman S. Amarjit Singh Pinky, Manager S. Bhupinder Singh Bhullar, and Principal Mrs. Mandeep Kaur, who together provide vision and direction to the institution.
        </p>
      </section>

      {/* Section 5: Academics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Academics
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          GHPS India Gate has a total strength of around 2400 students who are imparted learning and life skills by 107 smart, highly qualified, and competent teachers. The school prepares students for Humanities, Commerce, and Science streams at the Senior Secondary level.
        </p>
      </section>

      {/* Section 6: Sports & Activities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Sports & Activities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Sports form an integral part of education, building character, fostering discipline, and ensuring physical fitness. Many of our students have represented the school at Zonal, State, National, and even International levels. Students also participate in activities like Work Experience, Karate, Judo, Bhangra, Giddha, etc.
        </p>
      </section>

      {/* Section 7: Eminent Alumni */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#81BFDA] mb-4 border-b-2 border-[#FADA7A] inline-block pb-1">
          Eminent Alumni
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are proud to have produced thousands of professionals in different fields. Some of our eminent alumni include S. Manjit Singh G.K, Mr. Arvinder Singh Lovely, Ms. Jaspinder Kaur Narula, Mr. Rabbi Shergill, and Shaheed Captain Davinder Singh Jass (Kirti Chakra PARA (SF)).
        </p>
      </section>
    </div>
  );
}

export default About;
