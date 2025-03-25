
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderSummaryProps {
  orderTotal: number;
  shippingCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderTotal: initialOrderTotal, shippingCost }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [orderTotal, setOrderTotal] = useState(initialOrderTotal);
  const [orderReference, setOrderReference] = useState("");
  const [tiktokUsername, setTiktokUsername] = useState("");
  
  // Update the order total when customAmount changes
  useEffect(() => {
    if (customAmount) {
      const parsedAmount = parseFloat(customAmount);
      if (!isNaN(parsedAmount)) {
        setOrderTotal(parsedAmount);
      } else {
        setOrderTotal(0);
      }
    } else {
      setOrderTotal(0);
    }
  }, [customAmount]);

  // Save order details to localStorage when form is filled
  useEffect(() => {
    if (customAmount && orderReference && tiktokUsername) {
      const orderDetails = {
        id: `CMD-${Date.now().toString().substring(0, 10)}-${Math.floor(Math.random() * 1000)}`,
        amount: parseFloat(customAmount),
        reference: orderReference,
        tiktokUsername,
        date: new Date().toLocaleDateString("fr-FR"),
        status: "En attente",
        transporter: "Mondial Relay",
      };
      
      // Get existing orders or initialize empty array
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...existingOrders, orderDetails]));
    }
  }, [customAmount, orderReference, tiktokUsername]);
  
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

        <div className="checkout-section-title cursor-pointer mt-6">
          <span>Montant total</span>
          <ChevronUp size={20} />
        </div>

        <div className="bg-white rounded-md p-4 mb-4 border border-border">
          <div className="mb-3 flex items-center">
            <input 
              type="text" 
              className="flex-grow rounded-md border border-border px-4 py-2" 
              placeholder="100.00" 
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
            <span className="ml-2 text-lg">€</span>
          </div>
          <div className="mb-3">
            <label className="block text-sm mb-1">Référence de la commande</label>
            <input 
              type="text" 
              className="w-full rounded-md border border-border px-4 py-2" 
              placeholder="REF-12345" 
              value={orderReference}
              onChange={(e) => setOrderReference(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Pseudo TikTok</label>
            <input 
              type="text" 
              className="w-full rounded-md border border-border px-4 py-2" 
              placeholder="@username" 
              value={tiktokUsername}
              onChange={(e) => setTiktokUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
