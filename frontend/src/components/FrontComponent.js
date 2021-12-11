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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi non libero eget quam feugiat varius et in nunc.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Suspendisse potenti. Fusce gravida dictum cursus. Maecenas
                                posuere condimentum volutpat. Vestibulum diam quam,
                                ullamcorper vel neque vitae, ultrices porttitor lectus.
                                Maecenas rutrum accumsan lobortis.
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