import {useOutletContext} from "react-router-dom";
import {SidebarOutlet} from "../../organisms/Sidebar.tsx";

export function useSidebar() {
    return useOutletContext<SidebarOutlet>()
}