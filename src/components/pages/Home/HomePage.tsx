import NavigationBar from "../../organisms/NavigationBar.tsx";
import Footer from "../../organisms/Footer.tsx";
import TransitForm from "../../organisms/TransitForm.tsx";
import HomeSearch from "./HomeSearch.tsx";

export default function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <HomeSearch/>
            <TransitForm/>
            <Footer/>
        </div>
    );
}