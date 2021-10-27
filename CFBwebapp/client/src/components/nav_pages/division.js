import React from "react";
import "./../../css/Division.css";
import internal1 from '../../img/internal1.jpeg'



const Division = () => {
  return (
    <>
<div>          
          <div className="accordion" id="accordionPanelsStayOpen">
              <div className="accordion-item level-1">
                  <div id="panelsStayOpen">
                      <h2 className="accordion-header" >
                          <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#President">
                              President
                          </button>
                      </h2>
                      <div className="aboutteam">
                          <img alt="" src={internal1}/>
                          <h6>IPS Maithili Sharn Gupta</h6>
                          <a href="https://in.linkedin.com/in/maithilisharan-gupta-a2b4a092"><i className="bi bi-linkedin"></i></a>
                      </div>
                  </div>
                  
                  <div id="President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="President">About President</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ...
                        </div>
                        <div className="modal-footer">
                          
                          
                        </div>
                      </div>
                    </div>
                  
                
                
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                          It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              </div>

              <div id="level-2">
                  <div id="panelsStayOpen">
                      <h2 className="accordion-header" >
                          <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                              Vice President
                          </button>
                      </h2>
                      <div className="aboutteam">
                          <img alt="" src={internal1}/>
                          <h6>CA Harish C</h6>
                          <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                  </div>
                  <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="President">About Vice President</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ...
                        </div>
                        <div className="modal-footer"> 
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              
              
              <div id="level-3">
                  <h3>Internal Team</h3>

                  <div className="team">
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Internal1">
                                  Sumit Kumar
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="" src={internal1}/>
                              <h6>National Joint Secretary</h6>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Internal1" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Sumit Sir</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer"> 
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Manish Kumar
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="" src={internal1}/>
                              <h6>National General Secretary</h6>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Vice President</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer"> 
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Manish Kumar
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="" src={internal1}/>
                              <h6>National General Secretary</h6>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Vice President</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer"> 
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Manish Kumar
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="" src={internal1}/>
                              <h6>National General Secretary</h6>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Vice President</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer"> 
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Manish Kumar
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="" src={internal1}/>
                              <h6>National General Secretary</h6>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Vice President</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer"> 
                            </div>
                          </div>
                        </div>
                      </div>
                      

                  </div>
                  

                  
              </div>
              <div id="level-4">
                 

              </div>
              


              
          </div>

          <div className="commitees">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#NTRDC" type="button" role="tab" aria-controls="NTRDC" aria-selected="true">NTRDC (National Technical Research and Development commitee)</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#NEC" type="button" role="tab" aria-controls="NEC" aria-selected="true">NEC (National Executive commitee)</button>
                  </li>
                  <li className="nav-item" role="presentation" >
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#NMPC" type="button" role="tab" aria-controls="NMPC" aria-selected="true">NMPC (National Media and Publicity Committee)</button>
                  </li>
                  <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#NLC" type="button" role="tab" aria-controls="NLC" aria-selected="true">NLC (National Legal Committee)</button>
                    </li>
                  
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="NTRDC" role="tabpanel">...</div>
                  <div className="tab-pane fade" id="NEC" role="tabpanel" >...</div>
                  <div className="tab-pane fade" id="NMPC" role="tabpanel" >...</div>
                  <div className="tab-pane fade" id="NLC" role="tabpanel" >...</div>
                </div>

          </div>

      </div>
    </>
    
  );
};
export default Division;
