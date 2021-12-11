import React, {Component} from 'react';
import './css/information_style.css';

class ResumeComponent extends Component{
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-lg-6 col-md-12 location">
                        <img src=""></img>
                        <div className="department-info">
                            <h3>Header</h3>
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                            <a href="mailto:sam@icloud.com" className="btn btn-default">Email</a>
                            <a href="http://google.com" className="btn btn-default">Find Us</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeComponent