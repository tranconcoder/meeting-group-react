import React from "react";
import { Link } from "react-router-dom";

//@ts-ignore
import { getClassNameModuleGenerator } from "../../common/commonMethods";
import styles from "./Header.module.scss";

const cx = getClassNameModuleGenerator(styles);

function Header() {
	const tabList = [
		{
			title: "Trang chủ",
			linkTo: "/",
		},
		{
			title: "Tin tức",
			linkTo: "/news",
		},
		{
			title: "Thảo luận",
			linkTo: "/communicaton",
		},
		{
			title: "Học tập",
			linkTo: "/learning",
		},
		{
			title: "Làm việc nhóm",
			linkTo: "/working-group",
		},
	];

	return (
		<div className={cx("header-wrapper")}>
			<div className={cx("header-container")}>
				<div className={cx("left-slider")}></div>

				{/* Center slider */}
				<div className={cx("center-slider")}>
					<ul>
						{tabList.map((tab, index) => (
							<li key={index}>
								<Link to={tab.linkTo}>{tab.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={cx("right-slider")}></div>
			</div>
		</div>
	);
}

export default Header;
