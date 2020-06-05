import React from 'react';
import './Loading.scss';

const Loading = ({ width, height }) => {
	const style = {
		width,
		height,
	};

	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='loading'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
				style={style}
			>
				<rect fill='#e15b64' x='15' y='55' width='30' height='30' rx='3' ry='3'>
					<animate
						attributeName='x'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='-1.8333333333333333s'
					></animate>
					<animate
						attributeName='y'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='-1.3333333333333333s'
					></animate>
				</rect>
				<rect fill='#f8b26a' x='55' y='55' width='30' height='30' rx='3' ry='3'>
					<animate
						attributeName='x'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='-1.1666666666666667s'
					></animate>
					<animate
						attributeName='y'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='-0.6666666666666666s'
					></animate>
				</rect>
				<rect fill='#abbd81' x='35.7778' y='15' width='30' height='30' rx='3' ry='3'>
					<animate
						attributeName='x'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='-0.5s'
					></animate>
					<animate
						attributeName='y'
						dur='2s'
						repeatCount='indefinite'
						keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1'
						values='15;55;55;55;55;15;15;15;15'
						begin='0s'
					></animate>
				</rect>
			</svg>
		</>
	);
};

export default Loading;
