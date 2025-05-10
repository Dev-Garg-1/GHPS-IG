import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function SocialSidebar() {
  const socials = [
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/YOUR_PAGE',
      color: '#1877F2', // Facebook blue
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/YOUR_PAGE',
      color: '#E4405F', // Instagram pink
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com/YOUR_PAGE',
      color: '#1DA1F2', // Twitter blue
    },
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/YOUR_PAGE',
      color: '#FF0000', // YouTube red
    },
  ];

  return (
    <div className="fixed top-1/3 right-4 flex flex-col space-y-4 z-50">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform transform hover:scale-110"
          style={{ backgroundColor: item.color, color: 'white' }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialSidebar;
