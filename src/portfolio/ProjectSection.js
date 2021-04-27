import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./project.css";
SwiperCore.use([Navigation, Pagination]);
function ProjectSection() {
	// const [width, setWidth] = React.useState(window.innerWidth);
	// const [height, setHeight] = React.useState(window.innerHeight);
	// const updateWidthAndHeight = () => {
	// 	setWidth(window.innerWidth);
	// 	setHeight(window.innerHeight);
	// };
	// React.useEffect(() => {
	// 	console.log(width);
	// 	console.log(height);
	// 	window.addEventListener("resize", updateWidthAndHeight);
	// 	return () => window.removeEventListener("resize", updateWidthAndHeight);
	// }, [height, width]);
	const slides = [];
	for (let i = 0; i < 5; i++) {
		slides.push(
			<SwiperSlide key={`slides=${i}`} tag='li'>
				<img
					src={`https://picsum.photos/id/${i + 1}/500/300`}
					alt={`Slides ${i}`}
				/>
			</SwiperSlide>
		);
	}
	return (
		<>
			<Swiper
				id='main'
				tag='section'
				wrapperTag='ul'
				navigation
				pagination
				spaceBetween={0}
				slidesPerView={1}
			>
				{slides}
			</Swiper>
		</>
	);
}

export default ProjectSection;
