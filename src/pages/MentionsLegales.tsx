
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FooterLinks from '@/components/FooterLinks';
import { Button } from '@/components/ui/button';

const MentionsLegales: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <p className="font-medium">SAS Outlet en live</p>
            <p>Capital social : 10 000€</p>
            <p>RCS Paris 000 000 000</p>
            <p>Siège social : 123 Avenue de la Mode, 75001 Paris</p>
            <p>TVA intracommunautaire : FR0000000000</p>
            <p>Directeur de la publication : John Doe</p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">Hébergement</h2>
            <p>Le site est hébergé par la société XYZ Hosting, 456 Rue du Web, 75002 Paris.</p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="/">
              <Button className="bg-gray-800 hover:bg-black">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto">
          <FooterLinks />
        </div>
      </footer>
    </div>
  );
};

export default MentionsLegales;
