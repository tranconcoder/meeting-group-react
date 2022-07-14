import type { ChangeInfoContextType } from '../../../types/context';

import styles from './ChangeInfo.module.scss';

import { createContext, useState } from 'react';
import classNames from 'classnames/bind';

import InfoForm from './InfoForm/InfoForm';
import InfoTools from './InfoTools/InfoTools';
import Social from './Social/Social';

const cx = classNames.bind(styles);
const ChangeInfoContext = createContext<ChangeInfoContextType>({
	setHandleResetForm: () => {},
	setHandleSubmitForm: () => {},
	handleResetForm: () => {},
	handleSubmitForm: () => {},
});

function ChangeInfo() {
	const [handleResetForm, setHandleResetForm] = useState<() => any>(() => {});
	const [handleSubmitForm, setHandleSubmitForm] = useState<() => any>(
		() => {}
	);

	return (
		<ChangeInfoContext.Provider
			value={{
				handleResetForm,
				handleSubmitForm,
				setHandleResetForm,
				setHandleSubmitForm,
			}}
		>
			<section className={cx('change-info-wrapper')}>
				<div>
					<Social />
				</div>

				<div className={cx('info-form-container')}>
					<InfoForm />

					<InfoTools />
				</div>
			</section>
		</ChangeInfoContext.Provider>
	);
}

export { ChangeInfoContext as InfoContainerContext };
export default ChangeInfo;
