
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FooterLinks: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`py-4 text-xs text-gray-500 bg-gray-200 text-center ${isMobile ? 'flex flex-col space-y-2' : 'flex justify-center'}`}>
      {isMobile ? (
        <>
          <a href="#" className="hover:text-gray-700 transition-colors">CGV</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Mes commandes</a>
        </>
      ) : (
        <>
          <a href="#" className="hover:text-gray-700 transition-colors">CGV</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Confidentialité</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Mentions légales</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Mes commandes</a>
        </>
      )}
    </div>
  );
};

export default FooterLinks;
