
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FooterLinks: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`py-4 text-xs text-gray-500 bg-gray-200 text-center ${isMobile ? 'space-y-2' : 'flex justify-center'}`}>
      {isMobile ? (
        <div className="flex flex-col items-center space-y-2">
          <a href="#" className="hover:text-gray-700 transition-colors">CGV</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Mes commandes</a>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <a href="#" className="hover:text-gray-700 transition-colors">CGV</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Confidentialité</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Mentions légales</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Mes commandes</a>
        </div>
      )}
    </div>
  );
};

export default FooterLinks;
