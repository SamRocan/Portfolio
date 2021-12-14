import React from 'react'
import { InView } from 'react-intersection-observer';
import './css/resume_style.css'


const comp = (name) => {

    let text = "ok"

    function showText(e){
        text = name.title.toString()
        console.log(text)
    }
    function hideText(e){
        text = ""
    }
    return (
        <InView>
            {({ inView, ref, entry }) => (
                <div ref={ref} className={`col-md-6 col-sm-12 project-${name.direction}-${inView}`}>
                    <a href={name.websiteLink}>
                        <img src={name.imageLink} alt="Ok" width="100%" height="100%" onMouseEnter={showText} onMouseLeave={hideText}></img>
                    </a>
                </div>
            )}
        </InView>
    );
}
export default comp