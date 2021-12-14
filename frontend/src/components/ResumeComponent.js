import React, {Component} from 'react';
import './css/resume_style.css';
import factor from './images/fivefactor.png'
import restaurant from './images/restaurant.png'
import architecture from './images/architecture.png'
import investment from './images/investment.png'
import ProjectObserverComponent from "./ProjectObserverComponent";
class ResumeComponent extends Component{
    render() {
        return (
            <div className="container" id="project-container">
                <div className="row">
                    <h1 id="project-header">Projects</h1>
                    <ProjectObserverComponent websiteLink={"https://twitter-to-five-factor.herokuapp.com/"} imageLink={factor} direction={"left"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/RestaurantWebsite"} imageLink={restaurant} direction={"right"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/ArchitectureSite"} imageLink={architecture} direction={"left"}/>
                    <ProjectObserverComponent websiteLink={"https://github.com/SamRocan/investmenthub"} imageLink={investment} direction={"right"}/>

                    <br/>
                </div>
            </div>
        )
    }
}

export default ResumeComponent