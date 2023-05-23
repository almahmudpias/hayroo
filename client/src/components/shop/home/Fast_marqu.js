import React, { Fragment } from 'react';
import Marquee from "react-fast-marquee";
import brand1 from "../../../images/brand-01.png"
import brand2 from "../../../images/brand-02.png"
import brand3 from "../../../images/brand-03.png"
import brand4 from "../../../images/brand-04.png"
import brand5 from "../../../images/brand-05.png"
import brand6 from "../../../images/brand-06.png"
import brand7 from "../../../images/brand-07.png"
import brand8 from "../../../images/brand-08.png"
const Fast_marqu = () => {
    return (
        <Fragment>
            <div class="marque-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 marquee">
                                    <img src={brand1} alt="brand" />
                                </div>
                                <div className="mx-4 marquee">
                                    <img src={brand2} alt="brand" />
                                </div>
                                <div className="mx-4 marquee">
                                    <img src={brand3} alt="brand" />
                                </div>
                                <div className="mx-4 marquee ">
                                    <img src={brand4} alt="brand" />
                                </div>
                                <div className="mx-4 marquee ">
                                    <img src={brand5} alt="brand" />
                                </div>
                                <div className="mx-4 marquee ">
                                    <img src={brand6} alt="brand" />
                                </div>
                                <div className="mx-4 marquee ">
                                    <img src={brand7} alt="brand" />
                                </div>
                                <div className="mx-4 marquee ">
                                    <img src={brand8} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Fast_marqu;