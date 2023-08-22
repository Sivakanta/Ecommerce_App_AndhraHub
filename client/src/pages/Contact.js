import React from 'react'
import Layout from '../components/layout/layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
            <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/Images/Contact_Us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime. <br></br>
            We are avaialble 24X7.
            
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@andhrahub.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact