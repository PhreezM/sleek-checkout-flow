
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import OrderSummary from './OrderSummary';
import ShippingMethod from './ShippingMethod';
import PaymentMethod from './PaymentMethod';
import { Link } from 'react-router-dom';

const CheckoutForm: React.FC = () => {
  const [isAddressSectionOpen, setIsAddressSectionOpen] = useState(true);
  const [orderTotal] = useState(0.00);
  const [shippingCost] = useState(5.00);
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Veuillez accepter les conditions générales de vente.");
      return;
    }
    // Handle form submission
    console.log("Form submitted");
  };
  
  const handleShippingPointSelect = () => {
    // Handle shipping point selection
    console.log("Selecting shipping point");
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto px-4 pb-8">
      <OrderSummary orderTotal={orderTotal} shippingCost={shippingCost} />
      
      <div className="checkout-section">
        <div 
          className="checkout-section-title cursor-pointer"
          onClick={() => setIsAddressSectionOpen(!isAddressSectionOpen)}
        >
          <span>Adresse de livraison</span>
          {isAddressSectionOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        <div className={`accordion-content ${isAddressSectionOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
          <input 
            type="email"
            className="checkout-input"
            placeholder="E-mail"
            required
          />
          
          <div className="flex gap-3 mb-3">
            <input 
              type="text"
              className="checkout-input !mb-0 w-1/2"
              placeholder="Prénom"
              required
            />
            <input 
              type="text"
              className="checkout-input !mb-0 w-1/2"
              placeholder="Nom"
              required
            />
          </div>
          
          <input 
            type="text"
            className="checkout-input"
            placeholder="Adresse"
            required
          />
          
          <input 
            type="text"
            className="checkout-input"
            placeholder="Ville"
            required
          />
          
          <input 
            type="text"
            className="checkout-input"
            placeholder="Code postal"
            required
          />
          
          <div className="checkout-input !p-0 flex items-center">
            <select className="w-full px-4 py-3 bg-transparent focus:outline-none">
              <option value="France">France</option>
              <option value="Belgique">Belgique</option>
              <option value="Suisse">Suisse</option>
              <option value="Luxembourg">Luxembourg</option>
            </select>
            <ChevronDown size={16} className="mr-3" />
          </div>
          
          <input 
            type="tel"
            className="checkout-input"
            placeholder="Numéro de téléphone"
            required
          />
        </div>
      </div>
      
      <ShippingMethod 
        shippingCost={shippingCost}
        onSelectShippingPoint={handleShippingPointSelect}
      />
      
      <PaymentMethod />
      
      <div className="mb-6 flex items-start">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 mr-3"
          checked={termsAccepted}
          onChange={() => setTermsAccepted(!termsAccepted)}
        />
        <label htmlFor="terms" className="text-sm">
          J'accepte les <Link to="/cgv" className="text-blue-600 hover:underline">conditions générales de ventes</Link>
        </label>
      </div>
      
      <button type="submit" className="checkout-button bg-gray-800 hover:bg-black">
        CONFIRMER LA COMMANDE
      </button>
    </form>
  );
};

export default CheckoutForm;
