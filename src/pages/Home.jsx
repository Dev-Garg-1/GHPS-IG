import React, { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaMicroscope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import schoolImage from '@/assets/school.jpg';
// 👉 add your team images here:
import presidentImg from '@/assets/president.jpg';
import chairmanImg from '@/assets/chairman.png';
import managerImg from '@/assets/manager.png';
import principalImg from '@/assets/principal.png';
import vicePrincipalImg from '@/assets/vicePrincipal.png';
import headmistressImg from '@/assets/headmistress.png';

function Home() {
  const [count, setCount] = useState({
    students: 0,
    staff: 0,
    classrooms: 0,
    labs: 0,
  });

  const [hasStarted, setHasStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCount((prevCount) => ({
        students: prevCount.students < 1500 ? prevCount.students + 10 : 1500,
        staff: prevCount.staff < 120 ? prevCount.staff + 1 : 120,
        classrooms: prevCount.classrooms < 50 ? prevCount.classrooms + 1 : 50,
        labs: prevCount.labs < 15 ? prevCount.labs + 1 : 15,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  // Data for the carousel
  const messages = [
    {
      id: 1,
      position: 'President',
      name: 'some_name',
      image: presidentImg,
      message:
        'To educate a man in mind and not in morals,is to add a menace to society',
    },
    {
      id: 2,
      position: 'Chairman',
      name: 'S. Amarjit Singh Pinky',
      image: chairmanImg,
      message:
        'Education is an exploration not imposition,paving way for a warm, natural, well groomed healthy personality that is constant learning and evolving',
    },
    {
      id: 3,
      position: 'Manager',
      name: 'S. Bhupinder Singh Bhullar',
      image: managerImg,
      message:
        'Our dedicated team ensures every student receives attention, care, and the resources needed to thrive in a global society.',
    },
    {
      id: 4,
      position: 'Principal',
      name: 'Mrs. Mandeep Kaur',
      image: principalImg,
      message:
        'Contemplate and reflect upon knowledge, and you will become a benefactor to others',
    },
    {
      id: 5,
      position: 'Vice Principal',
      name: 'Mrs. Harinder Kaur',
      image: vicePrincipalImg,
      message:
        'We nurture curiosity and creativity, ensuring that students are prepared not just for exams, but for life.',
    },
    {
      id: 6,
      position: 'Headmistress',
      name: 'Mrs. Gurmeet Kaur Virdi',
      image: headmistressImg,
      message:
        'Every child is unique and full of potential. We foster a safe, loving, and enriching environment to bring out their best.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className='rounded-4xl bg-[#B1F0F7] flex flex-col md:flex-row items-center justify-between p-8 m-4 shadow-md'>
        <div className='flex-1 flex flex-col justify-center text-center md:text-left p-4 md:p-8 bg-white bg-opacity-60 rounded-3xl shadow-inner backdrop-blur-sm'>
          <h2 className='text-4xl md:text-4xl font-extrabold mb-4 text-[#81BFDA] leading-tight border-b-4 border-[#FADA7A] inline-block pb-2'>
            Welcome to <br /> Guru Harkrishan Public School <br /> India Gate
          </h2>
          <p className='font-medium text-lg text-gray-700'>
            Established in 1965, Guru Harkrishan Public School India Gate has always strived to impart
            <span className='font-semibold text-[#81BFDA]'> Value-Based Education</span>, maintaining the balance between academics and co-curricular activities. Our commitment is to nurture students into responsible and enlightened individuals.
          </p>
        </div>

        <div className='flex-1 flex justify-center mt-6 md:mt-0 md:ml-8'>
          <img
            src={schoolImage}
            alt='school'
            className='w-full max-w-[700px] h-[300px] object-cover rounded-3xl shadow-xl'
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className='py-12 mb-4 px-6 bg-[#F5F0CD]'
        ref={statsRef}
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 hover:shadow-[#FADA7A] transition duration-300">
            <FaUserGraduate className="mx-auto text-5xl text-[#81BFDA] mb-2" />
            <h3 className='text-3xl font-semibold text-[#81BFDA]'>{count.students}</h3>
            <p className='text-lg text-gray-700'>Students</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 hover:shadow-[#FADA7A] transition duration-300">
            <FaChalkboardTeacher className="mx-auto text-5xl text-[#81BFDA] mb-2" />
            <h3 className='text-3xl font-semibold text-[#81BFDA]'>{count.staff}</h3>
            <p className='text-lg text-gray-700'>Staff</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 hover:shadow-[#FADA7A] transition duration-300">
            <FaSchool className="mx-auto text-5xl text-[#81BFDA] mb-2" />
            <h3 className='text-3xl font-semibold text-[#81BFDA]'>{count.classrooms}</h3>
            <p className='text-lg text-gray-700'>Classrooms</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-2 hover:shadow-[#FADA7A] transition duration-300">
            <FaMicroscope className="mx-auto text-5xl text-[#81BFDA] mb-2" />
            <h3 className='text-3xl font-semibold text-[#81BFDA]'>{count.labs}</h3>
            <p className='text-lg text-gray-700'>Labs</p>
          </div>
        </div>
      </div>

      {/* Messages Carousel Section */}
      <div className='py-16 mb-4 px-6 bg-[#B1F0F7]'>
        <h2 className='text-4xl font-extrabold text-center mb-10 text-[#81BFDA] border-b-4 border-[#FADA7A] inline-block pb-2'>
          Messages from Our Leaders
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className='max-w-5xl  mx-auto'
        >
          {messages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden'>
                {/* Image */}
                <div className='md:w-1/2 w-full h-64 md:h-auto'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='object-cover w-full h-full'
                  />
                </div>
                {/* Content */}
                <div className='md:w-1/2 w-full p-6 flex flex-col justify-center'>
                  <h3 className='text-xl font-bold text-[#81BFDA] mb-1'>{item.position}</h3>
                  <h4 className='text-2xl font-semibold text-gray-800 mb-4'>{item.name}</h4>
                  <p className='text-lg text-gray-700 transition duration-500 ease-in-out transform hover:scale-105'>
                    "{item.message}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
