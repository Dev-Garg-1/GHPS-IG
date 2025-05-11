import React, { useState, useEffect } from "react";
import { admissionPoster } from "../assets/admission";

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-white/30 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg overflow-hidden relative max-w-md w-full shadow-2xl animate-zoom-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 cursor-pointer text-gray-700 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* Poster Image */}
        <img src={admissionPoster} alt="Admissions Open" className="w-full h-auto" />

        {/* CTA Button */}
        <div className="p-4 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegpLzvu73FDKybxcixwKi_ppREry0QzuyEpQkAEbAffGsFmQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#81BFDA] hover:bg-[#5ea0c7] text-white px-6 py-2 rounded-md font-semibold transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
