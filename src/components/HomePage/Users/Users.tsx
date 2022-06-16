import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaChalkboardTeacher, FaUser } from 'react-icons/fa';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import styles from './Users.module.scss';

import userSlideListThumb from '../../../images/user-list-slide-thumb-2.svg';

const cx = getClassNameModuleGenerator(styles);

interface UserSlide {
	title: string;
	description: string;
	handleClick?: () => any;
	Icon: IconType;
}

interface UserSlideList extends Array<UserSlide> {
	[index: number]: UserSlide;
}

function Users() {
	const [userSlideList] = useState<UserSlideList>([
		{
			title: 'Học sinh',
			description:
				'Giải pháp giúp học sinh theo dõi quá trình học tập, cùng nhau thảo luận học hỏi kiến thức.',
			Icon: BsFillPersonCheckFill,
		},
		{
			title: 'Giáo viên',
			description:
				'Cung cấp công cụ theo dõi, thống kê lớp học, trao đổi dữ liệu lớp với nhà trường nhanh chóng.',
			Icon: FaChalkboardTeacher,
		},
		{
			title: 'Học sinh',
			description:
				'Giải pháp giúp học sinh theo dõi quá trình học tập, cùng nhau thảo luận học hỏi kiến thức.',
			Icon: BsFillPersonCheckFill,
		},
		{
			title: 'Giáo viên',
			description:
				'Cung cấp công cụ theo dõi, thống kê lớp học, trao đổi dữ liệu lớp với nhà trường nhanh chóng.',
			Icon: FaChalkboardTeacher,
		},
	]);

	return (
		<div className={cx('features-container')}>
			<h2 className={cx('title')}>
				<FaUser />
				<span>Người dùng</span>
			</h2>

			<div className={cx('content')}>
				{/* Thumbnails */}
				<img src={userSlideListThumb} alt="" data-aos="zoom-in-right" />

				<ul className={cx('user-slide-list')}>
					{userSlideList.map(({ title, Icon, description, handleClick }, index) => (
						<li key={index} data-aos="zoom-in-left">
							<h3>
								<Icon />
								<span>{title}</span>
							</h3>

							<p>{description}</p>

							<button onClick={handleClick}>
								<p>Xem ngay!</p>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Users;
