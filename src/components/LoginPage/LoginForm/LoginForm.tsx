import { useRef, useState } from "react";

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
	const [, reRenderComponent] = useState({});

	const usernameValidateHandler = useRef<(isSubmit: boolean) => any>(() => {});
	const passwordValidateHandler = useRef<(isSubmit: boolean) => any>(() => {});

	return (
		<div className={cx("login-form")}>
			<h3 className={cx("title")}>
				<MdSwitchAccount />
				<span>Đăng nhập tài khoản</span>
			</h3>

			<form className={cx("form")}>
				<InputForm
					state={[username, setUsername]}
					Icon={FaUserLock}
					placeholder="Tên đăng nhập..."
					validates={{ required: true }}
					getValidateHandler={[usernameValidateHandler, reRenderComponent]}
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
					getValidateHandler={[passwordValidateHandler, reRenderComponent]}
				/>

				<SubmitFormButton
					handleOnClick={() => {
						usernameValidateHandler.current(true);
						passwordValidateHandler.current(true);
					}}
					content="Đăng nhập"
				/>
			</form>
		</div>
	);
}

export default LoginForm;
