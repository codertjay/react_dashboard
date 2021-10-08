import React from 'react';
import './widgetLg.css'

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">
                              Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">Status</td>
                    <Button type='Declined'/>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">
                              Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">Status</td>
                    <Button type='Approved'/>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">
                              Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">Status</td>
                    <Button type='Declined'/>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">
                              Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">Status</td>
                    <Button type='Approved'/>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">
                              Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">Status</td>
                    <Button type='Pending'/>
                </tr>
            </table>
        </div>
    )
};

export default WidgetLg;