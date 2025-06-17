import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProductsSection from "@/components/products-section";
import OfficesSection from "@/components/offices-section";
import JoinSection from "@/components/join-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow mt-20">
                <HeroSection />
                <ServicesSection />
                <ProductsSection />
                <OfficesSection />
                <JoinSection />
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
