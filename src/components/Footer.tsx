import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-luxury-gold mb-4">Manyavar</h3>
            <p className="text-white/80 mb-6">
              Your trusted partner for all celebration wear. Crafting memories since 1999.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-luxury-gold cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Sherwanis</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Indo Western</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Kurtas</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Wedding Collection</a></li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Store Locator */}
          <div>
            <h4 className="font-semibold mb-4">Find Us</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Wedding Closet</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Virtual Try-On</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Manyavar. All rights reserved. | Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;