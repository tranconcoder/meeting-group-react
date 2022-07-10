import styles from './Directory.module.scss';

import classNames from 'classnames/bind';
import footerDirectoryConfig from '../../../config/footerDirectoryConfig';

const cx = classNames.bind(styles);

function DirectoryList() {
	return (
		<ul className={cx('direction-list')}>
			{footerDirectoryConfig.map((tabInfo, index) => (
				<li key={index} className={cx('direction-list__item')}>
					<h3 className={cx('title')}>{tabInfo.title}</h3>

					{tabInfo.linkList.map(
						({ content, link, openInNewTab }, index) => (
							<a
								key={index}
								href={link}
								{...(openInNewTab && {
									target: '_blank',
									rel: 'noreferrer',
								})}
							>
								{content}
							</a>
						)
					)}
				</li>
			))}
		</ul>
	);
}

export default DirectoryList;
