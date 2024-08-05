import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AboutSection } from "./AboutSection";
import { AreasSection } from "./AreasSection";
import { Booking } from "./Booking";
import { MainSection } from "./MainSection";

export function Home() {
  return (
    <div>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat bg-pattern">
        <MainSection />
      </div>
      <AreasSection />
      <Booking />
      <AboutSection />
      <Footer />
    </div>
  );
}

// fundo veio do site backseasy
