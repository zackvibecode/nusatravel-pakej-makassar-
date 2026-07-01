import Header from "@/components/Header";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import TourHighlights from "@/components/sections/TourHighlights";
import Itinerary from "@/components/sections/Itinerary";
import ItineraryPDF from "@/components/sections/ItineraryPDF";
import IncludesExcludes from "@/components/sections/IncludesExcludes";
import Gallery from "@/components/sections/Gallery";
import PromoVideo from "@/components/sections/PromoVideo";
import PriceDetails from "@/components/sections/PriceDetails";
import DepartureDates from "@/components/sections/DepartureDates";
import BookingSteps from "@/components/sections/BookingSteps";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <PromoVideo />
        <TourHighlights />
        <Itinerary />
        <ItineraryPDF />
        <IncludesExcludes />
        <Gallery />
        <PriceDetails />
        <DepartureDates />
        <BookingSteps />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
