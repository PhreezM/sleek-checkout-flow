
import React from 'react';
import Logo from '@/components/Logo';
import CheckoutForm from '@/components/CheckoutForm';
import FooterLinks from '@/components/FooterLinks';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8">
        <div className="container mx-auto">
          <a 
            href="#" 
            className="inline-block mb-6 text-sm bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 transition-all ml-4 md:ml-0"
          >
            Mes commandes
          </a>
          
          <CheckoutForm />
          
          <div className="container mx-auto text-center">
            <FooterLinks />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div 
              className="checkout-section-title !mb-0 text-sm cursor-pointer"
              onClick={() => console.log("Open legal info")}
            >
              <span>INFORMATIONS LÉGALES</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
