import React from 'react';

const Report_crime = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="sectionheadreport">Report a Crime</h3>
                        <p className="sectionparareport">The effectiveness of police activities is enhanced by the support of citizens in<br /> every community that wants to feel safe and secure.</p>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-12 boxstyle">
                                <h3>Complain Details</h3>
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <select type="text" className="form-control" placeholder="Category of Complain">
                                        <option value="" disabled selected>Category of Complain</option>
                                        <option value="">Category of Complain</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <select type="text" className="form-control" placeholder="Select State">
                                        <option value="" >Select State</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select type="text" className="form-control" placeholder="State">
                                        <option value="" disabled selected>Select District</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <select type="text" className="form-control" placeholder="State">
                                        <option value="" disabled selected>Select Police Station</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <textarea type="text" className="form-control" rows="5">
                                        Please provide aditional Information about the crime
                                    </textarea>
                                    <br />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-12 boxstyle">
                                <h3>Suspect Details</h3>
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" placeholder="Suspect Name" />
                                </div>
                                <div className="col-6">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <textarea type="text" className="form-control" rows="5">
                                        Please provide aditional Information about the suspect
                                    </textarea>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="sendbtn m-4">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Report_crime;