
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CreditCard } from 'lucide-react';

const PaymentMethod: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Mode de paiement</span>
      </div>
      
      <div className="bg-white rounded-md p-4 border border-border">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center mr-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <span className="flex items-center">
              <CreditCard size={16} className="mr-2" />
              Payer par carte
            </span>
          </div>
          <div className="flex items-center">
            <img src="https://placehold.co/60x30/png?text=VISA" alt="Visa" className="h-5 mr-1" />
            <img src="https://placehold.co/60x30/png?text=MC" alt="Mastercard" className="h-5" />
            {isExpanded ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
          </div>
        </div>
        
        <div className={`accordion-content mt-4 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Numéro de carte</label>
              <input 
                type="text" 
                className="checkout-input" 
                placeholder="1234 5678 9012 3456" 
                maxLength={19}
              />
            </div>
            
            <div className="flex space-x-3">
              <div className="w-1/2">
                <label className="block text-sm mb-1">Date d'expiration</label>
                <input 
                  type="text" 
                  className="checkout-input" 
                  placeholder="MM/AA" 
                  maxLength={5}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1">CVV</label>
                <input 
                  type="text" 
                  className="checkout-input" 
                  placeholder="123" 
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
