function Footer() {
  return (
    <footer className="bg-[#81BFDA] text-white py-8 md:py-10 px-4 md:px-6 flex flex-col min-h-[300px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full flex-1">
        
        {/* Left: School Name + Description */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-[#FADA7A]">
            Guru Harkrishan Public School
            <div className="border-2 mt-4 rounded-lg w-[80%]"></div>
          </h2>
          <p className="text-sm font-semibold text-[#F5F0CD]">
            Empowering students with knowledge and values. <br /> We strive for excellence
            in academics and holistic development of every child, fostering growth
            and leadership for a brighter future.
          </p>
        </div>

        {/* Center: Contact Us */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#FADA7A]">
            Contact Us
            <div className="border-2 mt-2 rounded-lg w-[50%]"></div>
          </h2>
          <p className="text-sm font-semibold text-[#F5F0CD] mb-4">
            📍 1, Purana Quila Rd, Government Officers <br /> Colony, India Gate, New Delhi, Delhi 110001
          </p>
          <p className="text-sm font-semibold text-[#F5F0CD] mb-4">
            📞 +91-123-456-7890
          </p>
          <p className="text-sm font-semibold text-[#F5F0CD]">
            ✉️ info@ghpschool.ac.in
          </p>
        </div>

        {/* Right: Google Map */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#FADA7A]">
            Find Us
            <div className="border-2 mt-2 rounded-lg w-[35%]"></div>
          </h2>
          <a
            href="https://www.google.com/maps/place/1,+Purana+Qila+Rd,+Government+Officers+Colony,+India+Gate,+New+Delhi,+Delhi+110001"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:opacity-90 transition border-4 border-[#B1F0F7]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.462940357292!2d77.23348957461681!3d28.615884275673793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d712896dad%3A0x7cb1c40aa287d091!2sGuru%20Harkrishn%20Public%20School!5e0!3m2!1sen!2sin!4v1746864684419!5m2!1sen!2sin"
              className="w-full h-48 md:h-64 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </a>
        </div>

      </div>

      {/* Bottom Copy */}
      <div className="text-center text-base text-[#F5F0CD] mt-8">
        © {new Date().getFullYear()} Guru Harkrishan Public School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
