import React, {Component} from 'react';
import './css/information_style.css';
import {useRef} from "react/cjs/react.production.min";
import {getElement, getNextActiveElement} from "bootstrap/js/src/util";

class InformationComponent extends Component{
    constructor() {
        super();
        this.lineRef = React.createRef()
        this.educationRef = React.createRef()
        this.experienceRef = React.createRef()
        this.showEducation = this.showEducation.bind(this)
        this.showExperience = this.showExperience.bind(this)
    }
    showEducation() {
        console.log("WOrking")
        this.lineRef.current.style.background = "lime"
        this.lineRef.current.style.marginLeft = "0"
        this.educationRef.current.className = "infotext display"
        this.experienceRef.current.className = "infotext"

    }
    showExperience() {
        console.log("OK")
        this.lineRef.current.style.background = "gold"
        this.lineRef.current.style.marginLeft = "50%"
        this.educationRef.current.className = "infotext"
        this.experienceRef.current.className = "infotext display"
    }
    render() {
        return(
            <div className="container info-container">
                <h2 className="infotext display">Maybe put this information into the about me section, then link to CV at bottom</h2>
                <ul>
                    <li className="one"><a className="tab" onClick={this.showEducation}>Education</a></li>

                    <li className="two"><a className="tab" onClick={this.showExperience}>Experience</a></li>
                    <hr ref={this.lineRef} />
                </ul>
                <div ref={this.educationRef} className="infotext display">
                    <h1>Birkbeck University</h1>
                    <h3>MSc Computer Science</h3>
                    <ul>
                        <li>2020-21</li>
                    </ul>
                    <br/>
                    <h1>Swansea University</h1>
                    <h3>BSc Finance</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Phasellus vitae varius lorem, iaculis aliquet enim</li>
                        <li>Sed placerat malesuada nisi, nec molestie felis lacinia eu</li>
                        <li>In mattis velit porttitor rhoncus dignissim</li>
                    </ul>
                </div>
                <div ref={this.experienceRef} className="infotext">
                    <h1>Urban Development</h1>
                    <h3>Web Developer</h3>
                    <ul>
                        <li>- London based architecture firm. The website was built directly to the specification of the company director. </li>
                        <li>- Consists of a minimalist yet sleek design, developed with the intention of acting as a virtual portfolio for prospective clients</li>
                    </ul>
                    <br/>
                    <h1>Starkey Financial Planning</h1>
                    <h3>Internship</h3>
                    <ul>
                        <li>Shadowed the head CFP, taking minutes on client meetings, and being present in team discussion and investment presentations.</li>
                        <li>Assisted in asset and fund allocation under the supervision of head CFP, working with around 10M AUM, giving me insight into the process and using their company software (Voyant, Xplan).</li>
                        <li>Reorganized and optimized the companies filing structure using Excel Macros.</li>
                        <li>Prepared documentation and resources ahead of clients annual meetings.</li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default InformationComponent