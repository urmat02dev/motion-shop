import React from 'react';
import "./Faq.scss"
import {AiOutlinePlus} from "react-icons/ai";

const About = () => {
    return (
        <>
            <div id="questions">
                <div className="container">
                    <div className="questions">
                        <h1>Часто задаваемые вопросы</h1>

                        <div className="questions--card">
                            <div className="questions--card__provide">
                                <h1>What is an accordion in a website?</h1>
                                <input type="checkbox" id="plus"/>
                                <label htmlFor="plus"><AiOutlinePlus className="plus"/></label>
                                <div className="questions--card__provide--lorem">
                                    <p className="questions--card__provide--lorem__paragraph">
                                        What is an accordion in web design?
                                        In web design, an accordion is a type of menu
                                        that displays a list of headers stacked on top of one another.
                                        When clicked on, these headers will either reveal or hide
                                        associated content.</p>
                                </div>
                            </div>

                            <div className="questions--card__provide">
                                <h1>What is an accordion in HTML?</h1>
                                <input type="checkbox" id="plus2"/>
                                <label htmlFor="plus2"><AiOutlinePlus className="plus"/></label>
                                <div className="questions--card__provide--lorem">
                                    <p className="questions--card__provide--lorem__paragraph">
                                        Accordion. An accordion is used to show HTML content.
                                        Use the w3-hide class to hide the accordion content.</p>
                                </div>
                            </div>

                            <div className="questions--card__provide">
                                <h1>Can you make an accordion without Javascript?</h1>
                                <input type="checkbox" id="plus3"/>
                                <label htmlFor="plus3"><AiOutlinePlus className="plus"/></label>
                                <div className="questions--card__provide--lorem">
                                    <p className="questions--card__provide--lorem__paragraph">
                                        To create an accordion in HTML the user can use the HTML5 details element.
                                        We can create a good Accordion using a detail element and minimum CSS..</p>
                                </div>
                            </div>

                            <div className="questions--card__provide2">
                                <h1>Are accordions web accessible?</h1>
                                <input type="checkbox" id="plus4"/>
                                <label htmlFor="plus4"><AiOutlinePlus className="plus"/></label>
                                <div className="questions--card__provide2--lorem">
                                    <p className="questions--card__provide2--lorem__paragraph">
                                        Accordions are also web structures that often require
                                        JavaScript to show/hide things based on a user click or focus event.
                                        The key to making accordions accessible is to toggle some ARIA
                                        properties and states on user click or focus events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;