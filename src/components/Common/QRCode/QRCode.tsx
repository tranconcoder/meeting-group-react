import type { QRCodeProps } from '../../../types/props';

import { useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCode({
	value,
	getCanvas,
	getDownloadAction,
	...customProps
}: QRCodeProps) {
	const qrCodeWrapperRef = useRef<any>();

	// Received downloadAction to parent component
	useEffect(() => {
		const qrCodeElement: HTMLCanvasElement =
			qrCodeWrapperRef.current.querySelector('canvas');

		if (getDownloadAction) {
			getDownloadAction(() => {
				const link = document.createElement('a');

				link.download = 'qrCode.jpg';
				link.href = (qrCodeElement as HTMLCanvasElement).toDataURL();
				link.click();
				link.remove();
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Received canvasElement to parent component
	useEffect(() => {
		const qrCodeElement: HTMLCanvasElement =
			qrCodeWrapperRef.current.querySelector('canvas');

		if (getCanvas) getCanvas(qrCodeElement);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div ref={qrCodeWrapperRef}>
			<QRCodeCanvas value={value} {...customProps} />
		</div>
	);
}

export default QRCode;
