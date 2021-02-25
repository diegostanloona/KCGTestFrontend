import React, { useState } from 'react';

import SliderNavigation from '../components/SliderNavigation';
import EarthContainer from '../components/EarthContainer';

import './Home.css';

const Home = () => {

	return(
		<>
		<div className="home__content">
			<div className="home__earth-background"></div>
			<EarthContainer/>
			<div className="home__left-section"><span>We are an international <b>collaborative of talent</b></span></div>
			<div className="home__divider"></div>
			<div className="home__right-section"><span>We transverse global boundaries to help our clients build a better world.</span><br/><button>Our solutions</button></div>
		</div>
		</>
	);
};

export default Home;