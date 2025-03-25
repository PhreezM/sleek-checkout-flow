
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FooterLinks from '@/components/FooterLinks';
import { Button } from '@/components/ui/button';

interface Order {
  id: string;
  amount: number;
  reference: string;
  tiktokUsername: string;
  date: string;
  status: string;
  transporter: string;
}

const MesCommandes: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-black text-white w-full">
        <div className="container mx-auto flex justify-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto max-w-xl px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Vos commandes</h1>
          <p className="text-center text-gray-600 mb-8">
            * Seules les commandes passées à partir de votre appareil actuel sont affichées ici.
          </p>
          
          {orders.length > 0 ? (
            <div className="bg-gray-100 rounded-md overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-200 text-left">
                  <tr>
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Montant</th>
                    <th className="py-3 px-4">État</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-200">
                      <td className="py-3 px-4 text-sm">{order.id}</td>
                      <td className="py-3 px-4 text-sm">{order.date}</td>
                      <td className="py-3 px-4 text-sm">{order.amount.toFixed(2)} €</td>
                      <td className="py-3 px-4 text-sm">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center p-8 bg-gray-100 rounded-md mb-8">
              <p>Aucune commande trouvée</p>
            </div>
          )}
          
          <div className="flex justify-center">
            <Link to="/">
              <Button className="bg-gray-800 hover:bg-black">
                Retour
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

export default MesCommandes;
