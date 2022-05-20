import { useState } from "react";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../common/commonMethods.ts";
import styles from "./AuthPage.module.scss";

import LoginForm from "../../components/LoginPage/LoginForm/LoginForm";
import RegisterForm from "../../components/LoginPage/RegisterForm/RegisterForm";

const cx = getClassNameModuleGenerator(styles);

function AuthPage() {
	const [loginOrRegister, setLoginOrRegister] = useState<"login" | "register">("login");

	return (
		<div className={cx("wrapper")}>
			{/* Left slide */}
			<div className={cx("left-slide")}></div>

			{/* Right slide */}
			<div className={cx("right-slide")}>
				{/* Body */}
				<div className={cx("body")}>
					{loginOrRegister === "login" ? <LoginForm /> : <RegisterForm />}
				</div>

				{/* Footer */}
				<div className={cx("footer")}>
					{/* Login button */}
					<button
						className={cx(loginOrRegister === "login" && "active")}
						onClick={() => setLoginOrRegister("login")}
					>
						Đăng nhập
					</button>

					{/* Register button */}
					<button
						className={cx(loginOrRegister === "register" && "active")}
						onClick={() => setLoginOrRegister("register")}
					>
						Đăng ký
					</button>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
