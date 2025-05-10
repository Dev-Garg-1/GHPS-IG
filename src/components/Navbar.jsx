import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import schoolLogo from "@/assets/school-logo.jpg";
import sahibLogo from "@/assets/sahib-ji-logo.jpg";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-[#F5F0CD]">
      {/* Top Navbar */}
      <div className="flex flex-col items-center justify-center px-4 py-2 border-b border-[#B1F0F7] md:flex-row md:justify-between">
        <div className="flex items-center">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="w-20 h-20 sm:w-14 sm:h-14 object-cover rounded-full"
          />
        </div>

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#81BFDA] text-center mt-2 md:mt-0">
          GURU HARKRISHAN PUBLIC SCHOOL
        </h1>

        <div className="flex items-center">
          <img
            src={sahibLogo}
            alt="Sahib Ji Logo"
            className="w-20 h-20 sm:w-14 sm:h-14 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Bottom Links Navbar */}
      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 px-2 py-3 bg-[#B1F0F7]">
        <NavItem to="/">Home</NavItem>

        <Dropdown
          label="About"
          isOpen={openDropdown === 0}
          onToggle={() => toggleDropdown(0)}
        >
          <DropdownLink to="/about">About Us</DropdownLink>
          <DropdownLink to="/infrastructure">Infrastructure</DropdownLink>
          <DropdownLink to="/indo-german">Indo-German</DropdownLink>
        </Dropdown>

        <Dropdown
          label="Student Life"
          isOpen={openDropdown === 1}
          onToggle={() => toggleDropdown(1)}
        >
          <DropdownLink to="/activities">Activities</DropdownLink>
          <DropdownLink to="/proud-moments">Proud Moments</DropdownLink>
        </Dropdown>

        <Dropdown
          label="Alumni"
          isOpen={openDropdown === 2}
          onToggle={() => toggleDropdown(2)}
        >
          <DropdownLink to="/alumni-form">Alumni Form</DropdownLink>
          <DropdownLink to="/achievements">Achievements</DropdownLink>
        </Dropdown>

        <Dropdown
          label="Notices"
          isOpen={openDropdown === 3}
          onToggle={() => toggleDropdown(3)}
        >
          <DropdownLink to="/circulars">Circulars</DropdownLink>
          <DropdownLink to="/newsletter">Newsletter</DropdownLink>
          <DropdownLink to="/resource">Resource</DropdownLink>
        </Dropdown>
      </nav>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="relative text-gray-800 hover:text-[#FADA7A] px-2 md:px-4 py-2 font-medium transition"
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, children, isOpen, onToggle }) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center text-gray-800 hover:text-[#FADA7A] px-2 md:px-4 py-2 font-medium focus:outline-none transition"
      >
        {label}
        <FaChevronDown className="ml-1 text-xs" />
      </button>
      <div
        className={`
          absolute left-0 mt-2 w-48 bg-[#F5F0CD] rounded-md shadow-lg
          transition-all duration-200
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:opacity-0 md:invisible
          group-hover:opacity-100 group-hover:visible
        `}
      >
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
}

function DropdownLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-700 hover:bg-[#FADA7A] hover:text-gray-900 transition"
    >
      {children}
    </Link>
  );
}

export default Navbar;
