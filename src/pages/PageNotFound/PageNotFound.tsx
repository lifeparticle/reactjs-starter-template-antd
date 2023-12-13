import { FC } from "react";
import style from "./PageNotFound.module.scss";

const PageNotFound: FC = () => {
	return (
		<div className={style.pnf}>
			<h1>404 Page Not Found</h1>
		</div>
	);
};

export default PageNotFound;
