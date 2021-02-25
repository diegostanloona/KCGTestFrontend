import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

import * as THREE from 'three';

import SliderNavigation from './SliderNavigation';

import './Earth.css';

const Earth = props => {

	let globeLng = 0;

    const globeEl = useRef();

    const onScroll = (direction, callback) => {
    	let counter = 0;
    	let animation = setInterval(() => {
    		if(counter === 90 || counter === -90){
    			globeLng += 90*direction;
    			counter = 0;
    			callback(direction);
    			clearInterval(animation);
    		}
    		counter+=5*direction;
    		globeEl.current.pointOfView({lat: 5, lng: globeLng+counter, altitude: 2.5});
    	}, 20);
    }

    useEffect(() => {
		  globeEl.current.pointOfView({lat: 5, lng: 0, altitude: 2.5});
    }, []);

  	const tilesData = props.users.map(item => { return{
  												lat: item.lat, 
  												lng: item.lng, 
  												material: new THREE.MeshLambertMaterial({ 
  																							map: new THREE.TextureLoader().load(item.image), 
  																							opacity: "1", 
  																							transparent: true 
  																						})
  											}});

    console.log(tilesData);

	return(
		<>
		<SliderNavigation onScroll={onScroll}/>
		<div className="earth">
			<Globe ref={globeEl} backgroundColor="rgba(0, 0, 0, 0)" globeImageUrl="mercator.jpg" width="20vw" pointOfView={{lat: 90, lng: 0, altitude: 2.5}}
			 tilesData={tilesData}
			tileMaterial="material"
      		tileWidth={10} 
      		tileHeight = {10}
      		tileAltitude = {0.025}
       		/>
		</div>
		</>
	);
};

export default Earth;


/*



*/