import React from 'react'
import { InView } from 'react-intersection-observer';
import './css/techstack_style.css'


const comp = (name) => {

    return (
            <InView>
                {({ inView, ref, entry }) => (
                    <div ref={ref}>
                        <img className={`icon-${inView}`} src={name.vals}></img>
                    </div>
                )}
            </InView>
    );
}
export default comp