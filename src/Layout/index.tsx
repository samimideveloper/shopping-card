import { ReactNode } from "react";
import { Navigation } from "../components/atoms/navigation";

interface LayoutProps {
	children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>

			{children}
		</div>
	);
};
export default Layout;
