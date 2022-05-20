import { CSSProperties, useEffect, useState } from "react";

//@ts-ignore
import { getClassNameModuleGenerator, validateEmail } from "../../../common/commonMethods.ts";
import styles from "./InputForm.module.scss";
import { HiEyeOff, HiEye } from "react-icons/hi";

const cx = getClassNameModuleGenerator(styles);

interface Props {
	placeholder: string;
	state: [stateValue: string, setStateValue: (newValue: string) => any];
	type?: "text" | "password";
	Icon?: React.FC;
	styles?: CSSProperties;
	toggleVisiblePassword?: boolean;
	validates?: Partial<{
		required: boolean;
		minLength: number;
		maxLength: number;
		isEmail: boolean;
		isNumber: boolean;
		invalidSymbol: string[];
	}>;
	getValidateHandler?: (validateHandler: () => any) => any;
}

function InputForm({
	placeholder,
	state,
	Icon,
	type = "text",
	styles = {},
	toggleVisiblePassword,
	validates,
	getValidateHandler,
}: Props) {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [typed, setTyped] = useState(false);

	// Validate
	const validateHandler = () => {
		if (!validates || !typed) return;

		switch (true) {
			case !state[0] && validates.required: {
				return setErrorMessage("Thông tin này là bắt buộc!");
			}
			case validates.minLength && state[0].length < validates.minLength: {
				return setErrorMessage(`Độ dài tối thiểu là ${validates.minLength} ký tự!`);
			}
			case validates.maxLength && state[0].length > validates.maxLength: {
				return setErrorMessage(`Độ dài tối đa là ${validates.maxLength} ký tự!`);
			}
			case validates.isEmail && !validateEmail(state[0]): {
				return setErrorMessage(`Chỉ cho phép điền địa chỉ email!`);
			}
			default: {
				const invalidSymbolList: string[] = [];

				validates.invalidSymbol?.forEach(invalidSymbol => {
					if (state[0].includes(invalidSymbol)) {
						invalidSymbolList.push(invalidSymbol);
					}
				});

				if (invalidSymbolList.length > 0) {
					return setErrorMessage(`Chứa ký tự không được phép ${invalidSymbolList.join(", ")}`);
				}

				return setErrorMessage("");
			}
		}
	};

	useEffect(validateHandler, [state[0]]);
	useEffect(() => getValidateHandler && getValidateHandler(validateHandler), [state[0]]);

	return (
		<div className={cx("input-wrapper")} style={styles}>
			<label className={cx("input-container")}>
				<input
					className={cx({ error: errorMessage })}
					type={type === "password" ? (passwordIsVisible ? "text" : "password") : "text"}
					placeholder=" "
					value={state[0]}
					onChange={e => {
						state[1](e.target.value);
						setTyped(true);
					}}
				/>

				<p>
					{Icon && <Icon />}
					<span>{placeholder}</span>
				</p>

				{toggleVisiblePassword && (
					<div
						className={cx("eye-container")}
						onClick={() => setPasswordIsVisible(!passwordIsVisible)}
					>
						{passwordIsVisible ? <HiEyeOff /> : <HiEye />}
					</div>
				)}
			</label>

			<p className={cx("warning-container", { show: errorMessage })}>{errorMessage}</p>
		</div>
	);
}

export default InputForm;
