import React, {Component,useEffect, useRef, useState} from 'react'
import {useInView} from "react-intersection-observer";
import ObserverComponent from "./ObserverComponent";
import TextObserverComponent from "./TextObserverComponent";

import './css/techstack_style.css'


const TechStackComponent = () => {

        return(
            <div className="container" id="techstack-container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 id="aboutme-header">About Me</h1>
                        <TextObserverComponent textContent={"Quisque iaculis eros ac nisl efficitur posuere.\n" +
                        "                            Nunc ipsum sem, varius pellentesque venenatis eu, placerat non felis. Duis pulvinar dolor nec\n" +
                        "                            urna sagittis sollicitudin. Duis eget urna et elit pretium eleifend."}/>
                        <br/>
                        <TextObserverComponent textContent={"Praesent feugiat vel ante pharetra congue. Vivamus efficitur sem enim, ac interdum nisi\n" +
                        "                            maximus non. Maecenas non ultricies neque. Integer lacus erat, posuere et enim non, tincidunt\n" +
                        "                            ullamcorper velit. Mauris egestas diam risus, et bibendum eros pulvinar ut. In tempus orci sit\n" +
                        "                            amet odio laoreet, eu rutrum magna auctor."}/>
                        <br/>
                        <TextObserverComponent textContent={"Nam bibendum efficitur felis ac finibus. In sit amet mi in dolor interdum laoreet eu et odio.\n" +
                        "                            Integer id suscipit neque. Suspendisse erat est, aliquam eu dapibus quis, dignissim id augue.\n" +
                        "                            Vestibulum in arcu nec nunc viverra ultrices quis vitae erat. Integer vel tempor mi, ac aliquet\n" +
                        "                            eros."}/>
                        <br/>
                        <TextObserverComponent textContent={"Praesent feugiat vel ante pharetra congue. Vivamus efficitur sem enim, ac interdum nisi\n" +
                        "                            maximus non. Maecenas non ultricies neque. Integer lacus erat, posuere et enim non, tincidunt\n" +
                        "                            ullamcorper velit. Mauris egestas diam risus, et bibendum eros pulvinar ut. In tempus orci sit\n" +
                        "                            amet odio laoreet, eu rutrum magna auctor."}/>
                        <br/>
                        <TextObserverComponent textContent={"Nam bibendum efficitur felis ac finibus. In sit amet mi in dolor interdum laoreet eu et odio.\n" +
                        "                            Integer id suscipit neque. Suspendisse erat est, aliquam eu dapibus quis, dignissim id augue.\n" +
                        "                            Vestibulum in arcu nec nunc viverra ultrices quis vitae erat. Integer vel tempor mi, ac aliquet\n" +
                        "                            eros."}/>

                    </div>
                    <div className="col-md-6">
                        <h1 id="techstack-header">Some of the things I use...</h1>
                        <div id="stack-items">
                            <h3 className="tech-cat">Frontend</h3>
                            <div className="row">
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"} name={"HTML"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"} name={"CSS"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} name={"Javascript"}/></div>
                            </div>
                            <h3 className="tech-cat">Backend</h3>
                            <div className="row">
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"} name={"Python"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://camo.githubusercontent.com/7187dd1dfad78ec7e2a6379e790a43154f96414fb52f22070aa5835e8ed9e128/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d616e642d6272616e64732f3531322f3138315f4a6176615f6c6f676f5f6c6f676f732d3531322e706e67"} name={"Java"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"} name={"SQL"}/></div>
                            </div>
                            <h3 className="tech-cat">Libraries & Frameworks</h3>
                            <div className="row justify-content-center">
                                <div className="col-sm-4"><ObserverComponent vals={"https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png"} name={"Django"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"} name={"React"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://icon-library.com/images/jquery-icon-png/jquery-icon-png-2.jpg"} name={"JQuery"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://i.stack.imgur.com/dMXbE.png"} name={"Bootstrap"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png"} name={"GraphQL"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://funthon.files.wordpress.com/2017/05/bs.png"} name={"BeautifulSoup4"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png"} name={"Pandas"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://miro.medium.com/max/592/0*zKRz1UgqpOZ4bvuA"} name={"NLTK"}/></div>
                                <div className="col-sm-4"><ObserverComponent vals={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"} name={"Git"}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default TechStackComponent