import { Button } from "./ui/button";
import weddingGuestImage from "@/assets/wedding-guest.jpg";
import festiveWearImage from "@/assets/festive-wear.jpg";
import groomCollectionImage from "@/assets/groom-collection.jpg";
import brideCollectionImage from "@/assets/bride-collection.jpg";
import casualCollectionImage from "@/assets/casual-collection.jpg";
import partyCollectionImage from "@/assets/party-collection.jpg";
import traditionalCollectionImage from "@/assets/traditional-collection.jpg";
import indoWesternImage from "@/assets/indo-western.jpg";
 

const FeaturedCategories = () => {
  const ethnicCategories = [
    {
      title: "Traditional Heritage",
      subtitle: "Authentic Indian wear for cultural celebrations",
      image: traditionalCollectionImage,
      cta: "Explore Traditional"
    },
    {
      title: "Festive Favorites",
      subtitle: "Celebrate in style with our premium collection",
      image: festiveWearImage,
      cta: "Explore Festive Wear"
    },
     
    {
      title: "Casual Elegance",
      subtitle: "Comfortable kurtas for everyday sophistication",
      image: casualCollectionImage,
      cta: "Shop Casual Wear"
    }
  ];

  const maleCategories = [
    {
      title: "Groom's Royal Collection",
      subtitle: "Majestic sherwanis for the modern groom",
      image: groomCollectionImage,
      cta: "Shop Groom Collection"
    },
    {
      title: "Indo-Western Fusion",
      subtitle: "Contemporary meets traditional in perfect harmony",
      image: indoWesternImage,
      cta: "Explore Fusion Wear"
    }
  ];

  const femaleCategories = [
    {
      title: "Beautiful Indian Bride",
      subtitle: "Stunning lehengas and sarees for the perfect bride",
      image: brideCollectionImage,
      cta: "Shop Bridal Collection"
    },
    {
      title: "The Wedding Edit",
      subtitle: "Exquisite sherwanis for your special day",
      image: weddingGuestImage,
      cta: "Shop Wedding Collection"
    },
    {
      title: "Party Perfect",
      subtitle: "Stand out at every celebration",
      image: partyCollectionImage,
      cta: "Shop Party Wear"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections for every celebration
          </p>
        </div>
        
        {/* Explore Ethnic - 3 cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Explore Ethnic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ethnicCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm md:text-base mb-4 text-white/90">
                    {category.subtitle}
                  </p>
                  <Button variant="luxury" size="lg">
                    {category.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Male - 2 cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Explore Male
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maleCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm md:text-base mb-4 text-white/90">
                    {category.subtitle}
                  </p>
                  <Button variant="luxury" size="lg">
                    {category.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Female - 3 cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Explore Female
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {femaleCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm md:text-base mb-4 text-white/90">
                    {category.subtitle}
                  </p>
                  <Button variant="luxury" size="lg">
                    {category.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Redefine Celebrations
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              From intimate ceremonies to grand celebrations, our collection ensures you look your absolute best for every special moment.
            </p>
            <Button variant="groom" size="lg">
              View All Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;