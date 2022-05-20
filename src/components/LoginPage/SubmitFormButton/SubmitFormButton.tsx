import React from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../../common/commonMethods";
import styles from "./SubmitFormButton.module.scss";

const cx = getClassNameModuleGenerator(styles);

function SubmitFormButton({ content, handleOnClick }: SubmitFormButtonProps) {
	return (
		<button
			className={cx("button")}
			type="button"
			onClick={() => {
				handleOnClick && handleOnClick();
			}}
		>
			<p>{content}</p>
		</button>
	);
}

export default SubmitFormButton;
