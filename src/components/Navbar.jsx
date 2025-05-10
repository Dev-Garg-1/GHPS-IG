import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import schoolLogo from "@/assets/school-logo.jpg";
import sahibLogo from "@/assets/sahib-ji-logo.jpg";

function Navbar() {
  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        {/* School Name */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-700 text-center">
          GURU HARKRISHAN PUBLIC SCHOOL
        </h1>

        {/* Right Logo */}
        <div className="flex items-center">
          <img
            src={sahibLogo}
            alt="Sahib Ji Logo"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Bottom Links Navbar */}
      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 px-2 py-3 bg-gray-50">
        {/* Home */}
        <NavItem to="/">Home</NavItem>

        {/* About Dropdown */}
        <Dropdown label="About">
          <DropdownLink to="/about">About Us</DropdownLink>
          <DropdownLink to="/infrastructure">Infrastructure</DropdownLink>
          <DropdownLink to="/indo-german">Indo-German</DropdownLink>
        </Dropdown>

        {/* Student Life Dropdown */}
        <Dropdown label="Student Life">
          <DropdownLink to="/activities">Activities</DropdownLink>
          <DropdownLink to="/proud-moments">Proud Moments</DropdownLink>
        </Dropdown>

        {/* Alumni Dropdown */}
        <Dropdown label="Alumni">
          <DropdownLink to="/alumni-form">Alumni Form</DropdownLink>
          <DropdownLink to="/achievements">Achievements</DropdownLink>
        </Dropdown>

        {/* Notices Dropdown */}
        <Dropdown label="Notices">
          <DropdownLink to="/circulars">Circulars</DropdownLink>
          <DropdownLink to="/newsletter">Newsletter</DropdownLink>
          <DropdownLink to="/resource">Resource</DropdownLink>
        </Dropdown>
      </nav>
    </header>
  );
}

// Nav Item (for single links)
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="relative text-gray-800 hover:text-blue-700 px-2 md:px-4 py-2 font-medium"
    >
      {children}
    </Link>
  );
}

// Dropdown wrapper
function Dropdown({ label, children }) {
  return (
    <div className="group relative">
      <button className="flex items-center text-gray-800 hover:text-blue-700 px-2 md:px-4 py-2 font-medium focus:outline-none">
        {label}
        <FaChevronDown className="ml-1 text-xs" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
}

// Dropdown link
function DropdownLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
    >
      {children}
    </Link>
  );
}

export default Navbar;
