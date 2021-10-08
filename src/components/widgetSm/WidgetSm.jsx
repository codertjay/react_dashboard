import React from 'react';
import './widgetSm.css'
import {Visibility} from "@material-ui/icons";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Join Members
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                        alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ana keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                        alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ana keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                        alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ana keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                        alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ana keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                        alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ana keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
};

export default WidgetSm;