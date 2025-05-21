import React from 'react';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex items-center justify-between">
  {/* Left */}
  <div className="flex items-center space-x-6">
    <div className="text-2xl font-bold text-indigo-700 font-serif font-semibold">LAMP</div>
    <a href="#" className="text-gray-700 hover:text-indigo-700 font-medium font-plex-thai">Home</a>
    <a href="#" className="text-gray-700 hover:text-indigo-700 font-medium font-plex-thai">About</a>
    <a href="#" className="text-gray-700 hover:text-indigo-700 font-medium font-plex-thai">Contact</a>
  </div>

</nav>

  );
};

export default Nav;
