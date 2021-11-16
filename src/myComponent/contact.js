import React from 'react'

import "./contact.css";

export  function Contact() {
    return (
        <div>

<div className="wrapper">
    <div className="overlay">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9">
                <div className="contact-us text-center" >
                    <h3>CONTACT US</h3>
                    <p className="mb-5">You can CONTACT us through this page</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mt-5 text-center px-3">
                                <div className="d-flex flex-row align-items-center"> <span className="icons"><i className="fa fa-map-marker"></i></span>
                                    <div className="address text-left" > <span>Address</span>
                                        <p>461, Sugar camp, Barcelona,Spain</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-phone"></i></span>
                                    <div className="address text-left"> <span>Phone</span>
                                        <p>369712548</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-envelope-o"></i></span>
                                    <div className="address text-left"> <span>Email ID</span>
                                        <p>fcsohel@barcelona.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center px-1">
                                <div className="forms p-4 py-5 bg-white">
                                    <h5>Send Message</h5>
                                    <div className="mt-4 inputs"> <input type="text" className="form-control" placeholder="Name"/> <input type="text" className="form-control" placeholder="Email"/> <textarea className="form-control" placeholder="Type your message"></textarea> </div>
                                    <div className="button mt-4 text-left"> <button className="btn btn-dark">Send</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    )
}
