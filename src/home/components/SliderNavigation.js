import React, { useState } from 'react';

import './SliderNavigation.css';

const SliderNavigation = props => {

    const [index, setIndex] = useState(0);

    let counter = 0;
    let isScrolling = false;

    window.onmousewheel = e => {
        if(!isScrolling){
            isScrolling = true;
            setTimeout(()=>{
                isScrolling = false;
            }, 5000);
            const direction = e.deltaY > 0 ? 1 : -1;
            props.onScroll(direction, () => {
                if (direction === 1) {
                    setIndex(index === 3 ? 0 : index + 1);
                } else {
                    setIndex(index === 0 ? 3 : index - 1);
                }
            });
        }    
    }

    return (
        <ul className="slider-navigation">
			<li className={index===0?"active":undefined}><span>.</span></li>
			<li className={index===1?"active":undefined}><span>.</span></li>
			<li className={index===2?"active":undefined}><span>.</span></li>
			<li className={index===3?"active":undefined}><span>.</span></li>
		</ul>
    );

};

export default SliderNavigation;