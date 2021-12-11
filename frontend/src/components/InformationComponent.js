import React, {Component} from 'react';
import './css/information_style.css';

class InformationComponent extends Component{
    render() {
        return(
        <div class="container" id="information-area">
            <h1 id="information-header">About Me</h1>
            <div className="tabs">
                <div className="tab-2">
                    <label htmlFor="tab2-1">Education</label>
                    <input id="tab2-1" name="tabs-two" type="radio" checked="checked"></input>
                        <div>
                            <h4>Tab One</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis
                                vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu,
                                aliquet sodales dui. Sed laoreet condimentum nisi a egestas.</p><p>Donec interdum ante
                            ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a varius.
                            Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo
                            et maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget
                            vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            Curae; Vestibulum vel aliquet nunc, finibus posuere lorem. Suspendisse consectetur volutpat
                            est ut ornare.</p>
                        </div>
                </div>
                <div className="tab-2">
                    <label htmlFor="tab2-2">Experience</label>
                    <input id="tab2-2" name="tabs-two" type="radio"></input>
                        <div>
                            <h4>Tab Two</h4>
                            <p>Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque varius elit in neque
                                ornare commodo ac non tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi
                                tristique lorem eget iaculis consectetur. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Aenean at tellus eget risus tempus
                                ultrices. Nam condimentum nisi enim, scelerisque faucibus lectus sodales at.</p>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}
export default InformationComponent