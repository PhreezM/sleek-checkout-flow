
import React, { useState, useEffect } from 'react';
import { Clock, Truck, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ShippingMethodProps {
  shippingCost: number;
  onSelectShippingPoint: () => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ shippingCost, onSelectShippingPoint }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (isDialogOpen && !widgetLoaded) {
      // Load the Mondial Relay widget script
      const script = document.createElement('script');
      script.src = 'https://widget.mondialrelay.com/parcelshop-picker/jquery.plugin.mondialrelay.parcelshoppicker.min.js';
      script.async = true;
      script.onload = () => {
        setWidgetLoaded(true);
        
        // Initialize the widget when the script is loaded
        if (window.$ && window.$.fn.MRParcelShopPicker) {
          window.$(document).ready(function () {
            window.$("#PluginContent").MRParcelShopPicker({
              Target: "#ParcelShopPickerResult",
              Brand: "BDTEST  ",
              Country: "FR",
              PostCode: "",
              ColLivMod: "24R",
              NbResults: 7,
              Responsive: true,
              ShowResultsOnMap: true,
              OnParcelShopSelected: function (data) {
                console.log("Selected parcel shop:", data);
                onSelectShippingPoint();
                setIsDialogOpen(false);
              }
            });
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [isDialogOpen, widgetLoaded, onSelectShippingPoint]);

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
          onClick={() => setIsDialogOpen(true)}
          className="checkout-button bg-black text-white"
        >
          CHOIX DU POINT RELAIS
        </button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Sélectionnez votre point relais ou votre locker</DialogTitle>
            </DialogHeader>
            <div id="PluginContent" className="w-full h-full min-h-[500px]"></div>
            <div id="ParcelShopPickerResult" className="hidden"></div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ShippingMethod;
