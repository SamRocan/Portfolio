import React from 'react'
import { InView } from 'react-intersection-observer';
import './css/resume_style.css'


const comp = (name) => {

    return (
        <InView>
            {({ inView, ref, entry }) => (
                <div ref={ref} className={`col-md-12 col-sm-12 project-${name.direction}-${inView}`}>
                    <a href={name.websiteLink}>
                        <img src={name.imageLink} className="proj-image-half" alt="Ok" width="100%" height="100%"></img>
                        <h3 className="Test">{name.title}</h3>
                    </a>
                </div>
            )}
        </InView>
    );
}
export default comp