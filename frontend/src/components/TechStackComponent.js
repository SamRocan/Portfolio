import React, {Component} from 'react'
import './css/techstack_style.css'
class TechStackComponent extends Component{
    render() {
        return(
            <div className="container" id="techstack-container">
                <h1 id="techstack-header">Some of the things I use...</h1>
                <div id="stack-items">
                    <h3>Frontend</h3>
                    <div className="row">
                        <div className="col-sm-4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" className="icon"></img></div>
                        <div className="col-sm-4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" className="icon"></img></div>
                        <div className="col-sm-4"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="icon"></img></div>
                    </div>
                    <h3>Backend</h3>
                    <div className="row">
                        <div className="col-sm-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" className="icon"></img></div>
                        <div className="col-sm-3"><img src="https://camo.githubusercontent.com/7187dd1dfad78ec7e2a6379e790a43154f96414fb52f22070aa5835e8ed9e128/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d616e642d6272616e64732f3531322f3138315f4a6176615f6c6f676f5f6c6f676f732d3531322e706e67" className="icon"></img></div>
                        <div className="col-sm-3"><img src="https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png" className="icon"></img></div>
                        <div className="col-sm-3"><img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" className="icon"></img></div>
                    </div>
                    <h3>Libraries & Other</h3>
                    <div className="row">
                        <div className="col-sm-4"><img src="https://funthon.files.wordpress.com/2017/05/bs.png" className="icon" id="bs-icon"></img></div>
                        <div className="col-sm-4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png" className="icon"></img></div>
                        <div className="col-sm-4"><img src="https://miro.medium.com/max/592/0*zKRz1UgqpOZ4bvuA" className="icon"></img></div>
                    </div>
                </div>
            </div>
        )
    };
}
export default TechStackComponent