//@ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { getClassNameModuleGenerator } from '../../../../common/commonMethods';
import styles from './ImagesSlide.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cx = getClassNameModuleGenerator(styles);

const imageNameList: string[] = [
	'image-slide-1.jpg',
	'image-slide-2.jpg',
	'image-slide-3.jpg',
	'image-slide-4.jpg',
];

function ImagesSlide() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imageList, setImageList] = useState<Array<{ default: string }>>([]);

	const imageListRef = useRef<HTMLUListElement>(null);

	const handleClickNextButton = () => {
		setCurrentImageIndex(prev => (prev === imageList.length - 1 ? 0 : prev + 1));
	};

	const handleClickPrevButton = () => {
		setCurrentImageIndex(prev => (prev === 0 ? imageList.length - 1 : prev - 1));
	};

	// Dynamic import imageList
	useEffect(() => {
		imageNameList.forEach(imageName => {
			import(`../../../../images/${imageName}`).then(image => {
				console.log(image);
				setImageList(prev => [...prev, image]);
			});
		});
	}, []);

	// Set scroll after rendered
	useEffect(() => {
		const imageListElm = imageListRef.current as HTMLUListElement;

		imageListElm.style.transform = `translateX(-${currentImageIndex * 100}%)`;
	}, [currentImageIndex]);

	// Auto next slide
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			handleClickNextButton();
		}, 20000);

		return () => clearTimeout(timeoutId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentImageIndex]);

	return (
		<div data-aos="fade-up" className={cx('images-slide-container')}>
			<button className={cx('prev-button')} onClick={handleClickPrevButton}>
				<FaChevronLeft />
			</button>

			{/* Image list */}
			<ul className={cx('image-list')} ref={imageListRef} onScroll={e => e.preventDefault()}>
				{imageList.map((image, index) => (
					<li key={index}>
						<img src={image.default} alt="" />
					</li>
				))}
			</ul>

			{/* Progress dot list */}
			<ul className={cx('progress-dot-list')}>
				{imageList.map((image, index) => (
					<li
						key={index}
						data-active={currentImageIndex === index ? 'true' : 'false'}
						onClick={() => setCurrentImageIndex(index)}
					></li>
				))}
			</ul>

			<button className={cx('next-button')} onClick={handleClickNextButton}>
				<FaChevronRight />
			</button>
		</div>
	);
}

export default ImagesSlide;
