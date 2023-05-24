import React from 'react';
import Link from 'next/link';
const Navigation = () => {
  return (
    <div className=" flex items-center justify-center h-[8em] bg-gray-900 font-lato  text-white">
      <div className="px-5 ">
        <Link href="/">
          <div className="  text-5xl font-semibold font-[600] ">Gro.Do</div>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Navigation;
