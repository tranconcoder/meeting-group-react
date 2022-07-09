import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import { footerDirectoryConfig } from '../../config/footerDirectoryConfig';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx('footer')}>
			<ul className={cx('tab-list')}>
				{footerDirectoryConfig.map(tabInfo => (
					<>
						<h3 className={cx('title')}>{tabInfo.title}</h3>

						<li className={cx('tab-list--item')}>
							{tabInfo.linkList.map(({ content, link }) => (
								<a href={link} target="_blank" rel="noreferrer">
									{content}
								</a>
							))}
						</li>
					</>
				))}
			</ul>
		</div>
	);
}

export default Footer;
