import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import WalletInfo from "./WalletInfo.tsx";

export default function NavigationBar() {
    return (
        <nav className="border-b border-b-neutral-40">
            <div className="flex items-center justify-between text-sm font-medium py-3 md:w-h m-auto px-h md:px-0">

                <div className="flex gap-3 items-center">
                    <img src={logo} alt="Transmit"/>
                    <Link to="/" className="text-neutral-900">Transmit</Link>
                </div>

                <WalletInfo address={"0x1234567890"}/>
            </div>
        </nav>
    )
}