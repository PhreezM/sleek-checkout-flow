
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const FooterLinks: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`py-4 text-xs bg-gray-100 text-center ${isMobile ? 'space-y-2' : ''}`}>
      {isMobile ? (
        <div className="flex flex-col items-center space-y-2 text-gray-700">
          <Link to="/cgv" className="hover:text-gray-900 transition-colors">CGV</Link>
          <Link to="/confidentialite" className="hover:text-gray-900 transition-colors">Confidentialité</Link>
          <Link to="/mentions-legales" className="hover:text-gray-900 transition-colors">Mentions légales</Link>
          <Link to="/mescommandes" className="hover:text-gray-900 transition-colors">Mes commandes</Link>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-6">
          <Link to="/cgv" className="text-gray-700 hover:text-gray-900 transition-colors">CGV</Link>
          <Link to="/confidentialite" className="text-gray-700 hover:text-gray-900 transition-colors">Confidentialité</Link>
          <Link to="/mentions-legales" className="text-gray-700 hover:text-gray-900 transition-colors">Mentions légales</Link>
          <Link to="/mescommandes" className="text-gray-700 hover:text-gray-900 transition-colors">Mes commandes</Link>
        </div>
      )}
    </div>
  );
};

export default FooterLinks;
