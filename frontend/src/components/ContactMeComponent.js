import React, {Component} from 'react';
import './css/contactMe_style.css';

class ContactMeComponent extends Component{
    render() {
        return (
            <div className="container contact_me_container">
                <div className="row">
                    <h3 className="contact_me_header">Get in Touch</h3>
                    <p> If you've enjoyed looking through my portfolio and believe
                    i would be a good fit in your company, please feel free to contact me on one of the links below!</p>

                    <div className='social-media-icons'>
                        <a href="https://uk.linkedin.com/in/sam-clendenan-472a8b165"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/SamRocan"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <a className="btn btn-success contact-btn" href="mailto:samclendenan@icloud.com">Email Me!</a>
            </div>
        )
    };
}
export default ContactMeComponent
