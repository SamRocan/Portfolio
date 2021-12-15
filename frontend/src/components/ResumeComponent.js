import React, {Component} from 'react';
import './css/resume_style.css';
import factor from './images/fivefactor.jpg'
import restaurant from './images/restaurant.jpg'
import architecture from './images/architecture.jpg'
import investment from './images/investment.jpg'
import ProjectObserverComponent from "./ProjectObserverComponent";
class ResumeComponent extends Component{
    render() {
        return (
            <div className="container" id="project-container">
                <div className="row">
                    <h1 id="project-header">Projects</h1>
                    <ProjectObserverComponent websiteLink={"https://twitter-to-five-factor.herokuapp.com/"} imageLink={factor} direction={"left"} title={"Twitter Five Factor"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/RestaurantWebsite"} imageLink={restaurant} direction={"right"} title={"Restaurant Website"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/ArchitectureSite"} imageLink={architecture} direction={"left"}  title={"Architecture Site"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/investmenthub"} imageLink={investment} direction={"right"}  title={"Investment Hub"}/>

                    <br/>
                </div>
            </div>
        )
    }
}

export default ResumeComponent