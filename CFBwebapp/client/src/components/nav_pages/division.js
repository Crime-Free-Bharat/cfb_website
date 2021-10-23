import React from "react";



const Division = () => {
  return (
    <>
      <div>
        <div classname="accordion" id="accordionPanelsStayOpen">
                <div classname="accordion-item level-1">
                    <div id="panelsStayOpen">
                        <h2 classname="accordion-header" >
                            <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#President">
                                President
                            </button>
                        </h2>
                        <div classname="aboutteam">
                            <img src="internal1.jpeg"/>
                            <h6>IPS Maithili Sharn Gupta</h6>
                            <NavLink to="https://in.linkedin.com/in/maithilisharan-gupta-a2b4a092"><i classname="bi bi-linkedin"></i></NavLink>
                        </div>
                    </div>
                    
                    <div id="President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                    <div classname="modal-dialog">
                        <div classname="modal-content">
                          <div classname="modal-header">
                            <h5 classname="modal-title" id="President">About President</h5>
                            <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div classname="modal-body">
                            ...
                          </div>
                          <div classname="modal-footer">
                            
                            
                          </div>
                        </div>
                      </div>
                    
                  
                  
                    <div id="panelsStayOpen-collapseOne" classname="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div classname="accordion-body">
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                </div>

                <div id="level-2">
                    <div id="panelsStayOpen">
                        <h2 classname="accordion-header" >
                            <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                Vice President
                            </button>
                        </h2>
                        <div classname="aboutteam">
                            <img src="internal1.jpeg"/>
                            <h6>CA Harish C</h6>
                            <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                        </div>
                    </div>
                    <div id="Vice-President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                    <div classname="modal-dialog">
                        <div classname="modal-content">
                          <div classname="modal-header">
                            <h5 classname="modal-title" id="President">About Vice President</h5>
                            <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div classname="modal-body">
                            ...
                          </div>
                          <div classname="modal-footer"> 
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                
                
                <div id="level-3">
                    <h3>Internal Team</h3>

                    <div classname="team">
                        <div id="panelsStayOpen">
                            <h2 classname="accordion-header" >
                                <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Internal1">
                                    Sumit Kumar
                                </button>
                            </h2>
                            <div classname="aboutteam">
                                <img src="internal1.jpeg"/>
                                <h6>National Joint Secretary</h6>
                                <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                            </div>
                        </div>
                        <div id="Internal1" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                        <div classname="modal-dialog">
                            <div classname="modal-content">
                              <div classname="modal-header">
                                <h5 classname="modal-title" id="President">About Sumit Sir</h5>
                                <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div classname="modal-body">
                                ...
                              </div>
                              <div classname="modal-footer"> 
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="panelsStayOpen">
                            <h2 classname="accordion-header" >
                                <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                    Manish Kumar
                                </button>
                            </h2>
                            <div classname="aboutteam">
                                <img src="internal1.jpeg"/>
                                <h6>National General Secretary</h6>
                                <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                            </div>
                        </div>
                        <div id="Vice-President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                        <div classname="modal-dialog">
                            <div classname="modal-content">
                              <div classname="modal-header">
                                <h5 classname="modal-title" id="President">About Vice President</h5>
                                <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div classname="modal-body">
                                ...
                              </div>
                              <div classname="modal-footer"> 
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="panelsStayOpen">
                            <h2 classname="accordion-header" >
                                <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                    Manish Kumar
                                </button>
                            </h2>
                            <div classname="aboutteam">
                                <img src="internal1.jpeg"/>
                                <h6>National General Secretary</h6>
                                <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                            </div>
                        </div>
                        <div id="Vice-President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                        <div classname="modal-dialog">
                            <div classname="modal-content">
                              <div classname="modal-header">
                                <h5 classname="modal-title" id="President">About Vice President</h5>
                                <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div classname="modal-body">
                                ...
                              </div>
                              <div classname="modal-footer"> 
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="panelsStayOpen">
                            <h2 classname="accordion-header" >
                                <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                    Manish Kumar
                                </button>
                            </h2>
                            <div classname="aboutteam">
                                <img src="internal1.jpeg"/>
                                <h6>National General Secretary</h6>
                                <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                            </div>
                        </div>
                        <div id="Vice-President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                        <div classname="modal-dialog">
                            <div classname="modal-content">
                              <div classname="modal-header">
                                <h5 classname="modal-title" id="President">About Vice President</h5>
                                <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div classname="modal-body">
                                ...
                              </div>
                              <div classname="modal-footer"> 
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="panelsStayOpen">
                            <h2 classname="accordion-header" >
                                <button classname="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                    Manish Kumar
                                </button>
                            </h2>
                            <div classname="aboutteam">
                                <img src="internal1.jpeg"/>
                                <h6>National General Secretary</h6>
                                <NavLink to=""><i classname="bi bi-linkedin"></i></NavLink>
                            </div>
                        </div>
                        <div id="Vice-President" classname="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                        <div classname="modal-dialog">
                            <div classname="modal-content">
                              <div classname="modal-header">
                                <h5 classname="modal-title" id="President">About Vice President</h5>
                                <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div classname="modal-body">
                                ...
                              </div>
                              <div classname="modal-footer"> 
                              </div>
                            </div>
                          </div>
                        </div>
                        

                    </div>
                    

                    
                </div>
                
                


                
            </div>

            <div classname="commitees">
                <ul classname="nav flex-column nav-pills me-3">
                    <button classname="nav-item">
                      <NavLink classname="nav-link active" aria-current="page" to="#NTRDC">NTRDC</NavLink>
                    </button>
                    <button classname="nav-item">
                      <NavLink classname="nav-link" to="#NEC">NEC</NavLink>
                    </button>
                    <button classname="nav-item">
                      <NavLink classname="nav-link" to="#NMPC">NMPC</NavLink>
                    </button>
                    <button classname="nav-item">
                        <NavLink classname="nav-link" to="#NLC">NLC</NavLink>
                      </button>
                    
                  </ul>
                  <div classname="tab-content" id="myTabContent">
                    <div classname="tab-pane fade show active" id="NTRDC" role="tabpanel">...</div>
                    <div classname="tab-pane fade" id="NEC" role="tabpanel" >...</div>
                    <div classname="tab-pane fade" id="NMPC" role="tabpanel" >...</div>
                    <div classname="tab-pane fade" id="NLC" role="tabpanel" >...</div>
                  </div>

            </div>
      </div>
      
    </>
    
  );
};
export default Division;
