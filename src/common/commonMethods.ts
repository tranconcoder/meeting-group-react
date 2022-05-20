import clsx from "clsx";

export const getClassNameModuleGenerator =
	(stylesObject: any) =>
	(...selectorList: Array<string | ObjectAnyKey>) => {
		let classNameList = "";

		for (const selector of selectorList) {
			if (typeof selector === "string" && clsx(stylesObject[selector]) !== "") {
				classNameList += " " + clsx(stylesObject[selector]);
				continue;
			}

			if (typeof selector === "object") {
				for (const key in selector) {
					if (selector[key]) {
						classNameList += " " + clsx(stylesObject[key]);
					}
				}
			}
		}

		return classNameList;
	};

export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};
