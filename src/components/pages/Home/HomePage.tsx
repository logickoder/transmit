import NavigationBar from "../../organisms/NavigationBar.tsx";
import Footer from "../../organisms/Footer.tsx";
import TransitForm from "../../organisms/TransitForm.tsx";

export default function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <TransitForm/>
            <Footer/>
        </div>
    );
}