import React from "react";

const Activities = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 border-b-4 border-yellow-500 inline-block pb-2">
        School Activities
      </h1>

      <p className="text-lg text-center max-w-3xl mx-auto mt-6 text-gray-600">
        We are currently organizing all our school activities and memories into a visual archive. 
        From cultural celebrations and academic achievements to sports days and guest visits — everything will soon be available right here!
      </p>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400 italic">Page under construction</p>
        <span role="img" aria-label="construction" className="text-3xl mt-2 block">
          🚧
        </span>
      </div>
    </div>
  );
};

export default Activities;
