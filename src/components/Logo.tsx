
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-black italic text-3xl tracking-tight">
        <span className="relative">
          Outlet
          <span className="absolute text-red-600 -bottom-0.5 left-[95%]">.</span>
        </span>
      </div>
      <div className="text-[0.65rem] tracking-widest uppercase -mt-1 font-medium">En Live</div>
    </div>
  );
};

export default Logo;
