
import React from 'react';
import { Clock, Truck } from 'lucide-react';

interface ShippingMethodProps {
  shippingCost: number;
  onSelectShippingPoint: () => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ shippingCost, onSelectShippingPoint }) => {
  return (
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Mode de livraison</span>
      </div>
      
      <div className="bg-white rounded-md p-4 border border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center mr-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <span>Mondial relay</span>
          </div>
          <span className="font-medium">{shippingCost.toFixed(2)} € TTC</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 ml-8 mb-3">
          <Clock size={14} className="mr-1" />
          <span>3 à 5 jours ouvrables</span>
        </div>
        
        <div className="ml-8 text-xs text-gray-500 mb-4 flex items-start">
          <Truck size={14} className="mr-1 flex-shrink-0 mt-0.5" />
          <span>Frais de port offert pour les prochaines commandes durant le live</span>
        </div>
        
        <button 
          onClick={onSelectShippingPoint}
          className="checkout-button bg-black text-white"
        >
          CHOIX DU POINT RELAIS
        </button>
      </div>
    </div>
  );
};

export default ShippingMethod;
