import { IoIosCopy, IoMdClose } from 'react-icons/io';
import styles from './QRPreview.module.scss';

import { QRCodeCanvas } from 'qrcode.react';
import { Dispatch, Fragment, SetStateAction, useRef } from 'react';
import { HiFolderDownload } from 'react-icons/hi';
import {
	copyToClipBoard,
	getClassNameModuleGenerator,
} from '../../common/commonMethods';
import {
	useAppDispatch,
	useAppSelector,
} from '../../common/reduxHooks';
import { setDataToPreview } from '../../redux/slices/qrCode';

import AddTitle from '../Common/AddTitle/AddTitle';
import QRCode from '../Common/QRCode/QRCode';

const cx = getClassNameModuleGenerator(styles);

function QRPreview() {
	let { current: downloadQrAction } = useRef<() => any>();
	let { current: qrCodeCanvas } = useRef<HTMLCanvasElement>();

	const dispatch = useAppDispatch();
	const dataToPreviewQrCode = useAppSelector(
		state => state.qrCode.dataToPreview
	);

	const copyQrCodeTitle = 'Nhấn để sao chép ảnh';
	const copiedQrCodeTitle = 'Đã sao chép!';

	const closeQrCodePreview = () => dispatch(setDataToPreview(''));
	const handleOnClickCopyQrButton = (
		title: string,
		setTitle: Dispatch<SetStateAction<string>>
	) => {
		// HANDLE COPY
		qrCodeCanvas?.toBlob(blob => {
			blob && copyToClipBoard(blob);
		});

		// HANDLE DISPLAY TITLE
		// Change title in view
		setTitle(copiedQrCodeTitle);

		// Set timeout to set title to default
		setTimeout(() => setTitle(title), 2000);
	};
	const getDownloadQrAction = (downloadAction: () => any) => {
		downloadQrAction = downloadAction;
	};
	const getQrCanvasElement = (canvasElement: HTMLCanvasElement) => {
		qrCodeCanvas = canvasElement;
	};

	return (
		<Fragment>
			{dataToPreviewQrCode && (
				<div className={cx('qr-code-preview-wrapper')}>
					{/* QRPreview Box */}
					<div className={cx('qr-code-preview-box')}>
						<header className={cx('header')}>
							<span>Xem QR Code</span>

							<IoMdClose onClick={closeQrCodePreview} />
						</header>

						<div className={cx('body')}>
							<QRCode
								getDownloadAction={
									getDownloadQrAction
								}
								getCanvas={getQrCanvasElement}
								size={320}
								value={dataToPreviewQrCode}
							/>
						</div>

						<button
							className={cx('download-button')}
							onClick={() =>
								downloadQrAction && downloadQrAction()
							}
						>
							<HiFolderDownload />
							<p>Tải xuống</p>
						</button>

						<AddTitle
							title={copyQrCodeTitle}
							onClick={handleOnClickCopyQrButton}
						>
							<button className={cx('copy-button')}>
								<IoIosCopy />
								<p>Copy ảnh</p>
							</button>
						</AddTitle>
					</div>

					{/* Background */}
					<div
						className={cx('background')}
						onClick={closeQrCodePreview}
					></div>
				</div>
			)}
		</Fragment>
	);
}

export default QRPreview;
