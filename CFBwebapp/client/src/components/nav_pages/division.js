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
                              <a href="https://www.linkedin.com/in/sumit-o-a30926158/"><i className="bi bi-linkedin"></i></a>
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
                              <a href="https://www.linkedin.com/in/mkumarcyber/"><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About National General Secretary</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Jaspreet Singh
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="../../img/internal3.jpg" src={internal3}/>
                              <h6>Chief Project Coordinator</h6>
                              <a href="https://www.linkedin.com/in/jaspreet-singh-89b9a6a5/"><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Vice-President" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Chief Project Coordinator</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Bhupesa Pallai
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="../../img/internal4.jpeg" src={internal4}/>
                              <h6>Executive Leader</h6>
                              <a href="https://www.linkedin.com/in/bhupesa-kumar-pallai-5b1341138/"><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Executive-Leader" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Executive Leader</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="panelsStayOpen">
                          <h2 className="accordion-header" >
                              <button className="btn btn-primary about-button" type="button" data-bs-toggle="modal" data-bs-target="#Vice-President">
                                  Yuvah
                              </button>
                          </h2>
                          <div className="aboutteam">
                              <img alt="../../img/internal5.jpeg" src={internal5}/>
                              <h6>Chief Project Manager</h6>
                              <a href="https://www.linkedin.com/in/yuvah-l-kumar-a759711a1/"><i className="bi bi-linkedin"></i></a>
                          </div>
                      </div>
                      <div id="Chief-Project-Manager" className="modal fade" aria-labelledby="panelsStayOpen-headingOne" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="President">About Chief Project Manager</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              ...
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
            <h3>National commitees   </h3>
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
                  <div className="tab-pane fade show active" id="NTRDC" role="tabpanel">
                    <p>Through its funding of forensic science research and development, the Technical and R&D Committee of Crime Free Bharat continues to advance the speed, accuracy, and scope of forensic analysis, which ultimately bolsters the administration of justice. Crime Free Bharat affirms that scientific advancements and technological breakthroughs are essential to the continued growth and strengthening of the forensic sciences. <br/><br/>
                    Under this portfolio, Crime Free Bharat builds and maintains the forensic science research infrastructure. NIJ's research and development funding enhance the development of:  </p>
                    <ul>
                      <li>Physical capital by supporting the acquisition, maintenance, and development of laboratory instrumentation. </li>
                      <li>Intellectual capital by supporting researchers and providing learning and training experiences for scientists at all career stages. </li>
                      <li>Structural capital by funding projects that support databases and add to the scientific literature</li>
                    </ul>
                  </div>
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
