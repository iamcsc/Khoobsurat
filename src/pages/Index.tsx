import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import BrandCards from "@/components/BrandCards";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { GiSewingNeedle } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandCards />
      <FeaturedCategories />
      <Services />
      {/* Offerings strip above Footer */}
      <div style={{ width: '100%', background: '#fff', borderTop: '1px solid #eee', padding: '2.5rem 0 2rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-1px' }}>
          <span style={{ color: '#a3a3a3', fontWeight: 600 }}>Our Unique </span>
          <span style={{ color: '#2d2320', fontWeight: 800 }}>Offerings</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 180 }}>
            <GiSewingNeedle size={40} color="#6c4c3b" />
            <span style={{ color: '#2d2320', fontSize: '1.25rem', fontWeight: 400 }}>Free Alterations</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 180 }}>
            <FaExchangeAlt size={40} color="#6c4c3b" />
            <span style={{ color: '#2d2320', fontSize: '1.25rem', fontWeight: 400 }}>Easy Exchange & Return</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 180 }}>
            <MdVerified size={40} color="#6c4c3b" />
            <span style={{ color: '#2d2320', fontSize: '1.25rem', fontWeight: 400 }}>Assured Quality</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;