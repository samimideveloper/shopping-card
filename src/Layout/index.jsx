import { Navigation } from "../components/atoms/navigation";



const Layout = ({ children }) => {
	return (
		<div>
			<Navigation />

			{children}
		</div>
	);
};
export default Layout;
