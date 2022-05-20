import { useState } from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../../common/commonMethods.ts";
import styles from "./LoginForm.module.scss";
import { MdSwitchAccount } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

import InputForm from "../InputForm/InputForm";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";

const cx = getClassNameModuleGenerator(styles);

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const usernameValidateHandler = (handler: () => any) => {
		return handler;
	};
	const passwordValidateHandler = (handler: () => any) => {
		return handler;
	};

	return (
		<div>
			<h3 className={cx("title")}>
				<MdSwitchAccount /> Đăng nhập tài khoản
			</h3>

			<form className={cx("form")}>
				<InputForm
					styles={{ marginTop: "40px" }}
					state={[username, setUsername]}
					Icon={FaUserLock}
					placeholder="Tên đăng nhập..."
					validates={{ required: true }}
					getValidateHandler={usernameValidateHandler}
				/>

				<InputForm
					toggleVisiblePassword
					styles={{ marginTop: "30px" }}
					state={[password, setPassword]}
					type="password"
					Icon={HiLockClosed}
					placeholder="Mật khẩu..."
					validates={{
						required: true,
					}}
				/>

				<SubmitFormButton content="Đăng nhập" />
			</form>
		</div>
	);
}

export default LoginForm;
