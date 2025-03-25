
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FooterLinks from '@/components/FooterLinks';
import { Button } from '@/components/ui/button';

const CGV: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>
          
          <div className="prose max-w-none">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
            <h2 className="text-xl font-bold mt-6 mb-3">Article 1 - Objet</h2>
            <p>Les présentes conditions générales de vente régissent les relations contractuelles entre la société SAS Outlet en live et ses clients.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">Article 2 - Prix</h2>
            <p>Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC).</p>
            
            <h2 className="text-xl font-bold mt-6 mb-3">Article 3 - Commandes</h2>
            <p>Les commandes sont validées après paiement complet.</p>
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

export default CGV;
