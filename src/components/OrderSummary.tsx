
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderSummaryProps {
  orderTotal: number;
  shippingCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderTotal, shippingCost }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="checkout-section">
      <div 
        className="checkout-section-title cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Récapitulatif du paiement</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      <div className={`accordion-content ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white rounded-md p-4 mb-4 border border-border">
          <div className="flex justify-between mb-2">
            <span>Montant total</span>
            <span>{orderTotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Livraison</span>
            <span>{shippingCost.toFixed(2)} €</span>
          </div>
          <div className="border-t border-border my-2"></div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{(orderTotal + shippingCost).toFixed(2)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
