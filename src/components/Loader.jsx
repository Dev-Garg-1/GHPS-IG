import React from "react";
import {schoolLogo} from '../assets/logo';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <img src={schoolLogo} alt="School Logo" className="w-32 h-32 animate-pulse" />
      <p className="mt-4 text-[#81BFDA] text-lg font-semibold animate-bounce">Loading...</p>
    </div>
  );
};

export default Loader;
