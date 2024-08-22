'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#023a46] p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <Image src="/logo.png" alt="App Logo" width={50} height={50} /> */}
        <h1 className="text-white text-xl ml-4">Carbon Footprint Tracker</h1>
      </div>
    </nav>
  );
}
