import Layout from "../../../Layout";
import * as data from "../../../core/constans/data";
import useStyles from "./style";
import { Navigation } from "../../atoms/navigation";

const HomePage = () => {
	const classes = useStyles();
	return (
		<Layout>
			<Navigation />

			<main className={classes.container}>
				<section className={classes.productList}>
					{data.products.map(({ name, image, price }) => {
						return (
							<section className={classes.product}>
								<div>
									<img
										style={{ width: 200, height: "auto" }}
										src={image}
										alt={name}
									/>
								</div>
								<div className={classes.content}>
									<p>{name}</p>
									<p>$ {price}</p>
								</div>
							</section>
						);
					})}
				</section>
			</main>
		</Layout>
	);
};
export { HomePage };
