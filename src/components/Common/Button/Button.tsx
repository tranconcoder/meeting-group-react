import React from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../../common/commonMethods";
import { ButtonProps } from "../../../types/props";
import styles from "./Button.module.scss";

const cx = getClassNameModuleGenerator(styles);

function Button({ children, styles }: ButtonProps) {
	return (
		<button className={cx("button")} style={styles}>
			<p>{children}</p>
		</button>
	);
}

export default Button;
