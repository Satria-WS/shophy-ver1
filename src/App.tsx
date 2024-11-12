import React from "react";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (



    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Footer/>
      </div>
    </>
  );
}

export default App;

// <div> 
//   <Header />                 {/* Instead of Navbar, for clarity */}
//   <HeroSection />            {/* Hero is fine, but HeroSection adds clarity */}
//   <ProductListing />         {/* Instead of Products, it indicates a list of products */}
//   <FeaturedProducts />       {/* TopProducts is a good name, but FeaturedProducts is more descriptive */}
//   <PromoBanner />            {/* Banner could be more descriptive as PromoBanner */}
//   <NewsletterSignup />       {/* Subscribe -> NewsletterSignup is more specific */}
//   <ProductListing />         {/* If it's the same as the previous Products, you might want to name it differently, like 'NewProducts' or 'RecommendedProducts' */}
//   <CustomerTestimonials />   {/* Testimonials could be more descriptive */}
//   <Footer />                 {/* Footer is fine */}
//   <ModalPopup />             {/* Popup is fine, but ModalPopup is more specific */}
// </div>
