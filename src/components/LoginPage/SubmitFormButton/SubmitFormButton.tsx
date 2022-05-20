import React from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../../common/commonMethods";
import styles from "./SubmitFormButton.module.scss";

const cx = getClassNameModuleGenerator(styles);

function SubmitFormButton({ content }: SubmitFormButtonType) {
	return (
		<button className={cx("button")} type="button">
			<p>{content}</p>
		</button>
	);
}

export default SubmitFormButton;
