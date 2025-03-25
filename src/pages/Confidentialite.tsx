
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FooterLinks from '@/components/FooterLinks';
import { Button } from '@/components/ui/button';

const Confidentialite: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
          
          <div className="prose max-w-none">
            <p>La présente politique de confidentialité définit la manière dont SAS Outlet en live utilise et protège les informations que vous nous transmettez.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">Collecte des informations</h2>
            <p>Nous recueillons les informations suivantes : nom, prénom, adresse email, adresse postale, numéro de téléphone.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">Utilisation des informations</h2>
            <p>Ces informations sont utilisées dans le cadre du traitement et du suivi de vos commandes.</p>
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

export default Confidentialite;
