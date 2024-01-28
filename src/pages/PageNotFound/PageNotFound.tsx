import pnf from "assets/PageNotFound.svg";
import { FC } from "react";
import style from "./PageNotFound.module.scss";

const PageNotFound: FC = () => {
	return (
		<div className={style.pnf}>
			<img src={pnf} alt="page not found" />
		</div>
	);
};

export default PageNotFound;
