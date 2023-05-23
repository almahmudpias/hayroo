import React, { Fragment } from 'react';
import Layout from '../layout';

const Privacy_policy = () => {
    return (
        <Fragment>
            <Layout>
                <div className='layout'>
                    <div className='title'>
                        <h1>Privacy Policy</h1>
                    </div>
                    <section>
                        <h2>Information Collection and Use</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ultrices turpis. Integer suscipit turpis non orci lobortis consequat. Morbi cursus, metus sed consequat tempor, sem mi euismod sem, et scelerisque dolor odio at ex.</p>
                    </section>
                    <section>
                        <h2>Log Data</h2>
                        <p>Donec consequat mattis risus. Vivamus sit amet erat ullamcorper, ullamcorper eros et, aliquet massa. Ut ultricies elit a augue rhoncus, nec eleifend leo aliquam. Proin non pulvinar orci, at facilisis dui.</p>
                    </section>
                    <section>
                        <h2>Cookies</h2>
                        <p>Aenean vitae augue sed elit sagittis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce iaculis enim id pharetra dapibus.</p>
                    </section>
                    <section>
                        <h2>Security</h2>
                        <p>Curabitur fringilla dapibus est at ultrices. Sed ullamcorper hendrerit mi, a cursus dolor tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dapibus dolor in purus dapibus, id laoreet enim tristique.</p>
                    </section>
                    
                </div>
            </Layout>
        </Fragment>
    );
};

export default Privacy_policy;