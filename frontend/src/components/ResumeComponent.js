import React, {Component} from 'react';
import './css/resume_style.css';
import factor from './images/fivefactor2.jpg'
import restaurant from './images/restaurant.jpg'
import architecture from './images/architecture.jpg'
import investment from './images/investment.jpg'
import api from './images/API.jpg'
import ProjectObserverComponent from "./ProjectObserverComponent";
import CenterProjectObserverComponent from "./CenterProjectObserverComponent";

class ResumeComponent extends Component{
    render() {
        return (
            <div className="container" id="project-container">
                <div className="row">
                    <h1 id="project-header">Projects</h1>
                    <ProjectObserverComponent websiteLink={"https://twitter-five-factor.herokuapp.com/"} imageLink={factor} direction={"left"} title={"Twitter Five Factor"}/>
                    <ProjectObserverComponent websiteLink={"https://le-caprice-restau.herokuapp.com/"} imageLink={restaurant} direction={"right"} title={"Le Caprice Restau"}/>
                    <ProjectObserverComponent websiteLink={"https://architecture-site.herokuapp.com/"} imageLink={architecture} direction={"left"}  title={"Architecture Site"}/>
                    <ProjectObserverComponent websiteLink={"https://investmenthub.herokuapp.com/"} imageLink={investment} direction={"right"}  title={"Investment Hub"}/>
                    <CenterProjectObserverComponent websiteLink={"https://top-ten-crypto-api.herokuapp.com/"} imageLink={api} direction={"center"}  title={"Crypto API"}/>

                    <br/>
                </div>
            </div>
        )
    }
}

export default ResumeComponent