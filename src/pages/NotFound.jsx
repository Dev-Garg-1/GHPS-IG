import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="text-gray-500">
        Redirecting to home page in <span className="font-semibold">{countdown}</span> second{countdown !== 1 && 's'}...
      </p>
    </div>
  );
}

export default NotFound;
