import { useState, useRef } from "react";

import { MdPersonAdd } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { CgRename } from "react-icons/cg";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../../common/commonMethods.ts";
import styles from "./RegisterForm.module.scss";

import InputForm from "../InputForm/InputForm";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";

const cx = getClassNameModuleGenerator(styles);

function RegisterForm() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [retypePassword, setRetypePassword] = useState("");
	const [, reRenderComponent] = useState({});

	const fullNameValidateHandler = useRef<any>();
	const emailValidateHandler = useRef<any>();
	const passwordValidateHandler = useRef<any>();
	const retypePasswordValidateHandler = useRef<any>();

	const inputList: InputFormProps[] = [
		{
			placeholder: "Họ và tên",
			state: [fullName, setFullName],
			Icon: CgRename,
			validates: { required: true, minLength: 2, maxLength: 30 },
			getValidateHandler: [fullNameValidateHandler, reRenderComponent],
		},
		{
			placeholder: "Địa chỉ email",
			state: [email, setEmail],
			Icon: HiOutlineMail,
			validates: { required: true, isEmail: true },
			getValidateHandler: [emailValidateHandler, reRenderComponent],
		},
		{
			type: "password",
			placeholder: "Mật khẩu",
			state: [password, setPassword],
			Icon: RiLockPasswordLine,
			validates: {
				required: true,
				minLength: 8,
				maxLength: 30,
				upperCase: "some",
				lowerCase: "some",
				number: "some",
				specialLetter: "some",
			},
			toggleVisiblePassword: true,
			getValidateHandler: [passwordValidateHandler, reRenderComponent],
		},
		{
			type: "password",
			placeholder: "Xác nhận mật khẩu",
			state: [retypePassword, setRetypePassword],
			Icon: RiLockPasswordLine,
			validates: {
				required: true,
				equalTo: {
					value: password,
					label: "Mật khẩu trước đó",
				},
			},
			toggleVisiblePassword: true,
			getValidateHandler: [retypePasswordValidateHandler, reRenderComponent],
		},
	];

	const handleSubmitButton = () => {
		fullNameValidateHandler.current(true);
		emailValidateHandler.current(true);
		passwordValidateHandler.current(true);
		retypePasswordValidateHandler.current(true);
	};

	return (
		<div className={cx("register-form")}>
			<h3 className={cx("title")}>
				<MdPersonAdd />
				<span>Tạo tài khoản mới</span>
			</h3>

			<div className={cx("input-container")}>
				{inputList.map((input, index) => (
					<InputForm {...input} key={index} styles={{ marginTop: 30 }} />
				))}
			</div>

			<SubmitFormButton content="Tạo tài khoản" handleOnClick={handleSubmitButton} />
		</div>
	);
}

export default RegisterForm;
