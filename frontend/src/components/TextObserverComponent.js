import React from 'react'
import { InView } from 'react-intersection-observer';
import './css/techstack_style.css'


const comp = (name) => {

    return (
        <InView>
            {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <h4 className={`aboutme-info-${inView}`}>{name.subheading}</h4>
                    <p className={`aboutme-info-${inView}`}>{name.textContent}</p>
                </div>
            )}
        </InView>
    );
}
export default comp