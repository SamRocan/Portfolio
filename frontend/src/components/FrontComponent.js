import React, {Component} from "react";
import {Link} from 'react-scroll'
import portrait from './images/Me.jpg';
import {createRef} from "react/cjs/react.production.min";
import backdrop from './images/backdrop.svg'
import circle from './images/circle.svg'
import circleMobile from './images/circle-mobile.svg'
class FrontComponent extends Component {
    render() {
        return(
            <header className="App-header">
                <div>
                    <img id="circle-bg-1" src={circle}></img>
                    <img id="circle-bg-2" src={circle}></img>
                    <img id="circle-bg-3" src={circleMobile}></img>
                </div>
                <p>Hello, I'm</p>
                <div id="title-box">
                    <h1 id="title">Sam Clendenan</h1>
                    <h2 id="subtitle">Python Developer</h2>
                </div>
                <div className="container p-0 m-0">
                    <div className="row" id="info-summary">
                        <div className="col-md-6">
                            <p>I'm a Full Stack Web Developer with a background in Finance.</p>
                            <Link to="project-container" spy={true} smooth={true}><button className="btn btn-lrg" id="see-more">Find Out More</button></Link>
                        </div>
                        <div className="col-md-6"  id="portrait-image">
                            <img src={portrait} width="100%"></img>
                        </div>
                    </div>
                    <Link to="project-container" spy={true} smooth={true}><button className="btn btn-sml" id="see-more">Find Out More</button></Link>
                </div>
            </header>
        )
    }
}
export default FrontComponent