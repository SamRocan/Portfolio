import logo from './logo.svg';
import React, {Component} from 'react';
import InformationComponent from "./components/InformationComponent";
import FrontComponent from "./components/FrontComponent";
import ResumeComponent from "./components/ResumeComponent";
import TechStackComponent from "./components/TechStackComponent";
import ContactMeComponent from "./components/ContactMeComponent";
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
                <ResumeComponent/>
                <TechStackComponent />
                <ContactMeComponent />
            </div>
        );
    }
}

export default App;
