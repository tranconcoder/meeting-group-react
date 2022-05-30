//@ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { getClassNameModuleGenerator } from '../../../../common/commonMethods';
import styles from './ImagesSlide.module.scss';
import imageSlide1 from '../../../../images/images-slide (1).jpg';
import imageSlide2 from '../../../../images/images-slide (2).jpg';
import imageSlide3 from '../../../../images/images-slide (3).jpg';
import imageSlide4 from '../../../../images/images-slide (4).jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cx = getClassNameModuleGenerator(styles);

function ImagesSlide() {
	const imageList: string[] = [imageSlide1, imageSlide2, imageSlide3, imageSlide4];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const imageListRef = useRef<HTMLUListElement>(null);

	const handleClickNextButton = () => {
		setCurrentImageIndex(prev => (prev === imageList.length - 1 ? 0 : prev + 1));
	};

	const handleClickPrevButton = () => {
		setCurrentImageIndex(prev => (prev === 0 ? imageList.length - 1 : prev - 1));
	};

	// Set scroll after rendered
	useEffect(() => {
		const imageListElm = imageListRef.current as HTMLUListElement;
		const scrollStep = imageListElm.clientWidth;

		imageListElm.scrollLeft = scrollStep * currentImageIndex;
	}, [currentImageIndex]);

	// Auto next slide
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			handleClickNextButton();
		}, 10000);

		return () => {
			clearTimeout(timeoutId);
		};

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
						<img src={image} alt="" />
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
