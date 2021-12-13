import { ReactNode } from "react";
import { Navigation } from "../components/navigation";


interface LayoutProps{
    children?:ReactNode;
}

const Layout = ({children}:LayoutProps) =>{
    return (
        <div><Navigation/></div>
    );
};
export default Layout;