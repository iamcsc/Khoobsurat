import { Card, CardContent } from "./ui/card";

const BrandCards = () => {
  const brands = [
    { name: "Van Heusen", description: "Power Dressing", logo: "lovable-uploads/116db463-ffdb-45a6-8e2e-3cd54360ea81.png" },
    { name: "Many", description: "Special Brand", logo: "lovable-uploads/many.png" },
    { name: "Mufti", description: "Casual Wear", logo: "lovable-uploads/878735ca-60f8-4894-a195-34d25678068c.png" },
    { name: "Crimsoune Club", description: "Premium Fashion", logo: "lovable-uploads/af31671c-c92e-4426-972e-41b48f3ca717.png" },
    { name: "Killer", description: "Street Style", logo: "lovable-uploads/b9f9b2ce-e9ef-4499-bb24-a284d69778dd.png" },
    { name: "Spykar", description: "Denim & More", logo: "lovable-uploads/3581f973-9c44-4d02-8cd5-eab41e7516cc.png" },
    { name: "U.S. Polo Assn.", description: "Since 1890", logo: "lovable-uploads/fea78f5a-2086-4523-af7d-c2c29bd3fff6.png" },
    { name: "Blackberrys", description: "Sophisticated Style", logo: "lovable-uploads/169df842-33ca-4668-9617-26bc29fccbea.png" },
    { name: "BRBANN", description: "Classic Collection", logo: "lovable-uploads/28012020051145698_brbann.png" }
  ];

  return (
    <>
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
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border bg-card hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-full h-24 bg-card rounded-lg mb-4 flex items-center justify-center p-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="object-contain"
                      style={{ width: '250px', height: '90px', display: 'block', margin: '0 auto' }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {brand.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Animation Section after BrandCards */}
  <div className="py-1" style={{ background: "#f9ecd7" }}>
        <div className="flex justify-center items-center">
          <img
            alt="star_left"
            className="hidden sm:block"
            src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw0779030d/images/homepage/animation_star_left.png"
          />
          <img
            alt="animation"
            className="men-design mx-4"
            loading="lazy"
            src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw18e25d8a/images/homepage/Manyavar_Rakhi_Gif.gif"
            title=""
            style={{ height: "125px", maxHeight: "175px" }}
          />
          <img
            alt="star_right"
            className="hidden sm:block"
            src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw0779030d/images/homepage/animation_star_right.png"
          />
        </div>
      </div>
    </>
  );
};

export default BrandCards;