import React, {Component} from "react";
import portrait from './images/IMG_2662.jpg';
class FrontComponent extends Component {
    render() {
        return(
            <header className="App-header">
                <p>Hello, I'm</p>
                <div id="title-box">
                    <h1 id="title">Sam Clendenan</h1>
                    <h2 id="subtitle">Django Web Developer</h2>
                </div>
                <div className="container p-0 m-0">
                    <div className="row" id="info-summary">
                        <div className="col-md-6">
                            <p>I'm a Full Stack Web Developer with a background in Finance and have recently completed a <a href="#">MSc Computer Science</a>
                                <button className="btn btn-lrg" id="see-more">Find Out More</button>
                            </p>
                        </div>
                        <div className="col-md-6"  id="portrait-image">
                            <img src={portrait} width="100%"></img>
                        </div>
                    </div>
                    <button className="btn btn-sml" id="see-more">Find Out More</button>
                </div>
            </header>
        )
    }
}
export default FrontComponent