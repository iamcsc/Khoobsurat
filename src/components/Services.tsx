import { Users, Sparkles, MapPin, Phone } from "lucide-react";


const Services = () => {
  return (
    <div style={{ position: 'relative' }}>
  <section className="py-16 md:py-24" style={{ backgroundColor: '#f9ecd7' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Curate A Look For The Wedding Occasion
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get recommendations from a personal stylist! Consult our expert stylist to curate a look for your D day.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Styling</h3>
                    <p className="text-muted-foreground">Expert stylists to help you find the perfect outfit for your special day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Fabrics</h3>
                    <p className="text-muted-foreground">Finest fabrics and exquisite craftsmanship for your comfort and elegance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Store Experience</h3>
                    <p className="text-muted-foreground">Visit our stores for a personalized fitting and styling experience</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-muted-foreground">Stores Worldwide</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-luxury-gold mb-2">1M+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-luxury-gold mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-luxury-gold mb-2">100+</div>
                <div className="text-muted-foreground">Expert Stylists</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;