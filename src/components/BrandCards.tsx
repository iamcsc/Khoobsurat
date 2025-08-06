import { Card, CardContent } from "./ui/card";

const BrandCards = () => {
  const brands = [
    { name: "Van Heusen", description: "Power Dressing", logo: "/lovable-uploads/116db463-ffdb-45a6-8e2e-3cd54360ea81.png" },
    { name: "Manyavar", description: "Wedding Collection", logo: "/lovable-uploads/ec6fcf67-e220-4a4b-8d90-1623176c848d.png" },
    { name: "Mufti", description: "Casual Wear", logo: "/lovable-uploads/878735ca-60f8-4894-a195-34d25678068c.png" },
    { name: "Crimsoune Club", description: "Premium Fashion", logo: "/lovable-uploads/af31671c-c92e-4426-972e-41b48f3ca717.png" },
    { name: "Killer", description: "Street Style", logo: "/lovable-uploads/b9f9b2ce-e9ef-4499-bb24-a284d69778dd.png" },
    { name: "Spykar", description: "Denim & More", logo: "/lovable-uploads/3581f973-9c44-4d02-8cd5-eab41e7516cc.png" },
    { name: "U.S. Polo Assn.", description: "Since 1890", logo: "/lovable-uploads/fea78f5a-2086-4523-af7d-c2c29bd3fff6.png" },
    { name: "Blackberrys", description: "Sophisticated Style", logo: "/lovable-uploads/169df842-33ca-4668-9617-26bc29fccbea.png" }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium fashion from the most trusted brands
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-full h-24 bg-card rounded-lg mb-4 flex items-center justify-center p-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCards;