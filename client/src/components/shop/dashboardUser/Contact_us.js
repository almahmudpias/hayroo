import React, { Fragment } from 'react';
import Layout from '../layout';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsFillInfoCircleFill, BsFillPhoneLandscapeFill } from 'react-icons/bs';

const Contact_us = () => {
    return (
        <Fragment>
            <Layout>
                <div className="contact-wrapper layout py-5 home-wrapper-2">
                <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.787359680777!2d90.45435545000001!3d23.8195442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1683657085198!5m2!1sen!2sbd"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn1 border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                      House No: 35,Road 1, Block A <br /> Bashundhara R/A, Dhaka,<br />
                  1229
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsFillPhoneLandscapeFill className="fs-5" />
                      <a href="tel:+8801743923445">+880  1743923445</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:hayroo@customersupport.com">
                      hayroo@customersupports.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsFillInfoCircleFill className="fs-5" />
                      <p className="mb-0">Saturday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

                </div>
            </Layout>
        </Fragment>
    );
};

export default Contact_us;