import React, {Component} from 'react';
import './css/resume_style.css';
import factor from './images/fivefactor.png'
import restaurant from './images/restaurant.png'
import architecture from './images/architecture.png'
import investment from './images/investment.png'
class ResumeComponent extends Component{
    render() {
        return (
            <div className="container" id="project-container">
                <div className="row">
                    <h1 id="project-header">Projects</h1>
                    <div className="col-md-6 col-sm-12 project">
                        <img src={factor} alt="Ok" width="100%" height="100%"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 project">
                        <img src={restaurant} alt="Ok" width="100%" height="100%"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 project">
                        <img src={architecture} alt="Ok" width="100%" height="100%"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 project">
                        <img src={investment} alt="Ok" width="100%" height="100%"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeComponent