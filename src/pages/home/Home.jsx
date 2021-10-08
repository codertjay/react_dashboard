import React from 'react';
import './home.css'
import {UserData} from "../../dummyData";
import Chart from "../../components/chart/Chart.";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={UserData} title={'User Analytics'}
                   grid dataKey="Active"
            />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;