
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

        <div className="bg-white rounded-md p-4 mb-4 border border-border">
          <div className="mb-3">
            <label className="block text-sm mb-1">Montant (€)</label>
            <input type="text" className="w-full rounded-md border border-border px-4 py-2" placeholder="100.00 €" />
          </div>
          <div className="mb-3">
            <label className="block text-sm mb-1">Référence de la commande</label>
            <input type="text" className="w-full rounded-md border border-border px-4 py-2" placeholder="REF-12345" />
          </div>
          <div>
            <label className="block text-sm mb-1">Pseudo TikTok</label>
            <input type="text" className="w-full rounded-md border border-border px-4 py-2" placeholder="@username" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
