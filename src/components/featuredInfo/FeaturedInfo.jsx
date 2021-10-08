import './featuredInfo.css'

import React from 'react';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                   Sales
                </span>
                <div className="featuredContainer">
                        <span className="featuredMoney">
                            $2,415
                        </span>
                    <span className="featuredMoneyRate">
                            -11.4 <ArrowDownward className='featuredIcon negative '/>
                        </span>
                </div>
                <span className="featuredSub">
                               Compared to last months
                        </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                   Revenue
                </span>
                <div className="featuredContainer">
                        <span className="featuredMoney">
                            $4,415
                        </span>
                    <span className="featuredMoneyRate">
                            -11.4 <ArrowDownward className='featuredIcon negative '/>
                        </span>

                </div>
                <span className="featuredSub">
                               Compared to last months
                        </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                   Cost
                </span>
                <div className="featuredContainer">
                        <span className="featuredMoney">
                            $2,225
                        </span>
                    <span className="featuredMoneyRate">
                            +22.4 <ArrowUpward className='featuredIcon positive '/>
                        </span>
                </div>
                <span className="featuredSub">
                               Compared to last months
                   </span>
            </div>
        </div>
    )
};

export default FeaturedInfo;