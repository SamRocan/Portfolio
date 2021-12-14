import React, {Component} from 'react';
import './css/contactMe_style.css';

class ContactMeComponent extends Component{
    render() {
        return (
            <div className="container contact_me_container">
                <div className="row">
                    <h3 className="contact_me_header">Get in Touch</h3>
                    <div className="col-md-6">
                        <img className="social-media-icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
                    </div>
                    <div className="col-md-6">
                        <img className="social-media-icon" src="https://pngimg.com/uploads/github/github_PNG83.png"></img>
                    </div>
                </div>


                <a className="btn btn-success contact-btn" href="mailto:samclendenan@icloud.com">Email Me!</a>
            </div>
        )
    };
}
export default ContactMeComponent
