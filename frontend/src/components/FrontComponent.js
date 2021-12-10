import React, {Component} from "react";

class FrontComponent extends Component {
    render() {
        return(
            <header className="App-header">
                <p>Hello, I'm</p>
                <div id="title-box">
                    <h1 id="title">Sam Clendenan</h1>
                    <h2 id="subtitle">Django Web Developer</h2>
                </div>
            </header>
        )
    }
}
export default FrontComponent