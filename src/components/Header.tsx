import { Search, PhoneCallIcon,  User, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border">
      
      {/* Top announcement bar */}
     
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div  className="flex-shrink-0">
  <a href="/">
    <img src="lovable-uploads/mainlogo.png" alt="Manyavar Logo" className="h-12 w-auto" />
  </a>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-luxury-gold transition-colors font-medium">MEN</a>
            <a href="#" className="text-foreground hover:text-luxury-gold transition-colors font-medium">WOMEN</a>
            <a href="#" className="text-foreground hover:text-luxury-gold transition-colors font-medium">KIDS</a>
          </nav>
          
          {/* Right section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">WEDDING CLOSET</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">COLLECTIONS</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">STORES</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <PhoneCallIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MapPin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;