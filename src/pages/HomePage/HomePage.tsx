import { useState } from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../common/commonMethods";
import styles from "./HomePage.module.scss";

import Header from "../../components/Header/Header";

const cx = getClassNameModuleGenerator(styles);

function HomePage() {
	return (
		<div className={cx("container")}>
			<Header />
		</div>
	);
}

export default HomePage;
