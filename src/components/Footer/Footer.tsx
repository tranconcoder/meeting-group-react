import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import footerDirectionConfig from '../../config/footerDirectoryConfig';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx('footer')}>
			<ul className={cx('direction-list')}>
				{footerDirectionConfig.map((tabInfo, index) => (
					<li key={index} className={cx('direction-list__item')}>
						<h3 className={cx('title')}>{tabInfo.title}</h3>

						{tabInfo.linkList.map(({ content, link }, index) => (
							<a
								key={index}
								href={link}
								target="_blank"
								rel="noreferrer"
							>
								{content}
							</a>
						))}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Footer;
