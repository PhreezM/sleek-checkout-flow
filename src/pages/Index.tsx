
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import CheckoutForm from '@/components/CheckoutForm';
import FooterLinks from '@/components/FooterLinks';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const [isLegalInfoOpen, setIsLegalInfoOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8">
        <div className="container mx-auto">
          <Link 
            to="/mescommandes" 
            className="inline-block mb-6 text-sm bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 transition-all ml-4 md:ml-0"
          >
            Mes commandes
          </Link>
          
          <CheckoutForm />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto">
          <div className="mb-4 mx-auto max-w-xl px-4">
            <div 
              className="bg-white rounded-md p-4 border border-border flex justify-between items-center cursor-pointer"
              onClick={() => setIsLegalInfoOpen(!isLegalInfoOpen)}
            >
              <span className="font-medium">INFORMATIONS LÉGALES</span>
              {isLegalInfoOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            <div className={`accordion-content ${isLegalInfoOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
              <div className="p-4 text-sm text-gray-600 space-y-2">
                <p>SAS Outlet en live - Capital: 10 000€</p>
                <p>RCS Paris 000 000 000</p>
                <p>Siège social: 123 Avenue de la Mode, 75001 Paris</p>
                <p>TVA intracommunautaire: FR0000000000</p>
                <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant.</p>
              </div>
            </div>
          </div>
          
          <FooterLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;
