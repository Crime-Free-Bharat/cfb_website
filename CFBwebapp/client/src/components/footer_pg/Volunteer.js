import React from 'react'
import volImg from '../../img/volunteer.svg'

function Volunteer() {
    return (
        <section id="" className="section">
        <div className="container bgcont">
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="sectionhead">Want To Volunteer</h3>
                    <p className="sectionpara2">The effectiveness of police activities is <br /> enhanced by the support of citizens in<br /> every community that wants to feel safe<br /> and secure.</p>
                    <img src={volImg} className="img-responsive stctionimg" />
                </div>
                <div classNameName="col-sm-6 secondsec">
                    <form>
                        <div className="row">
                          <div className="col-6">
                            <input type="text" className="form-control" placeholder="Name *" />
                          </div>
                          <div className="col-6">
                            <input type="number" className="form-control" placeholder="Phone *" />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                              <input type="text" className="form-control" placeholder="Email*" />
                            </div>
                            <div className="col-6">
                              <input type="text" className="form-control" placeholder="Subject*" />
                            </div>
                        </div>
                          <br />
                        <div className="row">
                            <div className="col-6">
                                <textarea type="text" className="form-control">
                                  How did you come to know about CFB?
                                </textarea>
                            </div>
                            <div className="col-6">
                              <textarea type="text" className="form-control">
                                Why would you like to volunteer for Crime Free Bharat ? *
                              </textarea>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12">
                                <button type="submit" className="sendbtn">Submit</button>
                            </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Volunteer;