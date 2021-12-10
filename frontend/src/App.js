import logo from './logo.svg';
import React, {Component} from 'react';
import HeadingBannerComponent from "./components/HeadingBannerComponent";
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
                <header className="App-header">
                    <h1 id="title">Is this centered?</h1>
                </header>
                <HeadingBannerComponent/>
            </div>
        );
    }
}

export default App;
