import { createContext, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './InfoContainer.module.scss';
import InfoForm from './InfoForm/InfoForm';
import InfoTools from './InfoTools/InfoTools';
import { InfoContainerContextType } from '../../../types/context';

const cx = classNames.bind(styles);
const InfoContainerContext = createContext<InfoContainerContextType>({
	setHandleResetForm: () => {},
	setHandleSubmitForm: () => {},
	handleResetForm: () => {},
	handleSubmitForm: () => {},
});

function InfoContainer() {
	const [handleResetForm, setHandleResetForm] = useState<() => any>(() => {});
	const [handleSubmitForm, setHandleSubmitForm] = useState<() => any>(
		() => {}
	);

	return (
		<InfoContainerContext.Provider
			value={{
				handleResetForm,
				handleSubmitForm,
				setHandleResetForm,
				setHandleSubmitForm,
			}}
		>
			<div className={cx('info-container')}>
				<InfoForm />

				<InfoTools />
			</div>
		</InfoContainerContext.Provider>
	);
}

export { InfoContainerContext };
export default InfoContainer;
