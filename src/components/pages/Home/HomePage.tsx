import NavigationBar from "../../organisms/NavigationBar.tsx";
import HomeGetSection from "./HomeGetSection.tsx";
import HomeWhySection from "./HomeWhySection.tsx";
import HomeWhatSection from "./HomeWhatSection.tsx";
import HomeWhatNextSection from "./HomeWhatNextSection.tsx";
import Footer from "../../organisms/Footer.tsx";

export default function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <HomeGetSection/>
            <HomeWhySection/>
            <HomeWhatSection/>
            <HomeWhatNextSection/>
            <Footer/>
        </div>
    );
}