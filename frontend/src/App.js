import logo from './logo.svg';
import React, {Component} from 'react';
import InformationComponent from "./components/InformationComponent";
import FrontComponent from "./components/FrontComponent";
import './App.css';

class App extends Component {
    constructor() {
        super();
        //Scrolls to top of page on refresh / load
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }


    render() {
        return (
            <div className="App">
                <FrontComponent/>
                <InformationComponent/>
            </div>
        );
    }
}

export default App;
