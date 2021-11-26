import React from "react";
import "./../../css/Division.css";
import President from "../../img/sir.png";
import volunteers from "../../api/volunteers";
import internal1 from "../../img/internal1.jpeg";
import internal2 from "../../img/internal2.jpeg";
import internal3 from "../../img/internal3.jpg";
import internal4 from "../../img/internal4.jpeg";
import internal5 from "../../img/internal5.jpeg"; 


const Division = () => {
  return (
    <>
      <div className="divisionmain">
        <div className="accordion" id="accordionPanelsStayOpen">
          <div className="accordion-item level-1">
            <div id="panelsStayOpen">
              <h2 className="accordion-header">
                <button
                  className="btn btn-primary about-button"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#President">
                  President
                </button>
              </h2>
              <div className="aboutteam">
                <img alt="" src={President} />
                <h6>IPS Maithili Sharn Gupta</h6>
                <a href="https://in.linkedin.com/in/maithilisharan-gupta-a2b4a092">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div
              id="President"
              className="modal fade"
              aria-labelledby="panelsStayOpen-headingOne"
              tabindex="-1"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="President">
                      About President
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">A man who serves the country can change the system.
Experience as the highest-ranking police officer as a DGP Mr.
Maithili Sharan Gupta. It has incredible work in the law
enforcement industry and has wonderful skills like Analytics
skills, Operation Management, Team Building, and many other
features. He has completed the M. Tech course in the Strong
military and Protective services Professionals from the highly
reorganized institute IIT Delhi. He worked on several projects
that can support the transformation of the capability of India. At
present, he works as a project leader of the study cum
implementation team of the GRP Help App and Investigation
Support System, and also as a President of CRIME FREE
BHARAT. The idea behind this project is beautiful.</div>
                </div>
              </div>
            </div>
          </div>

          <div id="level-2">
            <div id="panelsStayOpen">
              <h2 className="accordion-header">
                <button
                  className="btn btn-primary about-button"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Vice-President">
                  Vice President
                </button>
              </h2>
              <div className="aboutteam">
                <img alt="" src={internal1} />
                <h6>CA Harish C</h6>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div
              id="Vice-President"
              className="modal fade"
              aria-labelledby="panelsStayOpen-headingOne"
              tabindex="-1"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="President">
                      About Vice President
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">...</div>
                </div>
              </div>
            </div>
          </div>

          <div id="level-3">
            <h3>Internal Team</h3>

            <div className="team">
              <div id="panelsStayOpen">
                <h2 className="accordion-header">
                  <button
                    className="btn btn-primary about-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Internal1">
                    Sumit Kumar
                  </button>
                </h2>
                <div className="aboutteam">
                  <img alt="" src={internal1} />
                  <h6>National Joint Secretary</h6>
                  <a href="https://www.linkedin.com/in/sumit-o-a30926158/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div
                id="Internal1"
                className="modal fade"
                aria-labelledby="panelsStayOpen-headingOne"
                tabindex="-1"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="sumitkumar">
                        About Sumit Sir
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body"> Mr. Sumit Kumar is a cybercrime expert
at Delhi police and a National Joint Secretary of National
Technical Research and Development Committee (NTRDC) at
Crime Free Bharat (CFB). He is a member of the Global
Advisory Board of Threat Intelligence CTIA and also a certified
Threat Intelligence Analyst in IMEA. He is a founder of Noob
Hackers community, NHC. Being a bug hunter at Bug crowd
and HackerOne, he did several bug bounty hunting. He has also
achieved various certifications like CISA, Access Data certified
investigator, Black bag certified mobilize operation, Google
cloud platform (GCP), Splunk could infrastructure, and many
others.</div>
                  </div>
                </div>
              </div>

              <div id="panelsStayOpen">
                <h2 className="accordion-header">
                  <button
                    className="btn btn-primary about-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#internal2">
                    Manish Kumar
                  </button>
                </h2>
                <div className="aboutteam">
                  <img alt="" src={internal2} />
                  <h6>National General Secretary</h6>
                  <a href="https://www.linkedin.com/in/mkumarcyber/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div
                id="internal2"
                className="modal fade"
                aria-labelledby="panelsStayOpen-headingOne"
                tabindex="-1"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="President">
                        About National General Secretary
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">A man with his laptop who thinks he
can change the world. Mr. Manish Kumar is served as a National
General Secretary in the CRIME FREE BHARAT. He is CEO of
the VIEH group, where they serve various posts. He also works
as a Chief Information Security officer. His skills are Wireless
Networking, Kali Linux, and Ethical Hacking. He has various
industrial knowledge like Penetration testing, Cyber security,
web development, and many other things.
</div>
                  </div>
                </div>
              </div>
              <div id="panelsStayOpen">
                <h2 className="accordion-header">
                  <button
                    className="btn btn-primary about-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Vice-President">
                    Jaspreet Singh
                  </button>
                </h2>
                <div className="aboutteam">
                  <img alt="../../img/internal3.jpg" src={internal3} />
                  <h6>Chief Project Coordinator</h6>
                  <a href="https://www.linkedin.com/in/jaspreet-singh-89b9a6a5/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div
                id="Vice-President"
                className="modal fade"
                aria-labelledby="panelsStayOpen-headingOne"
                tabindex="-1"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="President">
                        About Chief Project Coordinator
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">...</div>
                  </div>
                </div>
              </div>
              <div id="panelsStayOpen">
                <h2 className="accordion-header">
                  <button
                    className="btn btn-primary about-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Executive-Leader">
                    Bhupesa Pallai
                  </button>
                </h2>
                <div className="aboutteam">
                  <img alt="../../img/internal4.jpeg" src={internal4} />
                  <h6>Executive Leader</h6>
                  <a href="https://www.linkedin.com/in/bhupesa-kumar-pallai-5b1341138/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div
                id="Executive-Leader"
                className="modal fade"
                aria-labelledby="panelsStayOpen-headingOne"
                tabindex="-1"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="Executive-Leader">
                        About Executive Leader
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">Mr. Bhupesa Kumar Pallai, a
proud veteran, brighten himself by serving in the Indian Army,
where he executed several complex projects to empower the
nation, and he is the Co-founder and director of AACSL, a cyber
security company in Odisha, with over two decades of
experience in cyber security. As he is a part of a major mission,
Crime Free Bharat, he is an executive leader of the National
Technical Research and Development Committee (NTRDC). He
also got various medals and honors, like General Officer
Commendation Card, for devotion to his duty towards the
Nation. He is now a certified and listed member of the Microsoft
company. Age is not a barrier to learn and achieve something
new, it’s only a limitation you put on your mind. He proved this
beautifully by achieving over 200 National and International
certifications through an online portal after his retirement. One
of the proudest moments in his life is making a record under the
INDIA BOOK OF RECORDS by completing 200 technical
courses from January 30, 2020, to July 28, 2021</div>
                  </div>
                </div>
              </div>
              <div id="panelsStayOpen">
                <h2 className="accordion-header">
                  <button
                    className="btn btn-primary about-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Chief-Project-Manager">
                    Yuvah
                  </button>
                </h2>
                <div className="aboutteam">
                  <img alt="../../img/internal5.jpeg" src={internal5} />
                  <h6>Chief Project Manager</h6>
                  <a href="https://www.linkedin.com/in/yuvah-l-kumar-a759711a1/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div
                id="Chief-Project-Manager"
                className="modal fade"
                aria-labelledby="panelsStayOpen-headingOne"
                tabindex="-1"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="President">
                        About Chief Project Manager
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">Man love to facing the challenges in
life. Mr. Yuvah L Kumar is highly experienced in cyber
technology. He is completing his diploma in electronics and
communication from the Guru Nanak Institute of technology. He
is a highly focused person and hardworking and can add to any
team he is a part of His energy to make things happen was
contagious and it helped us achieve great goals. One of the best
project leaders and he is CEO and Founder of the YCL NET
SURAKSHA and also serves as a Chief project manager at
CRIME FREE BHARAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="level-3">
            <h3>Volunteers</h3>

            <div className="voluntearteam">
              {volunteers.map(element => {
                const {id, volname, image, heading6, hyperLinkRefernce} = element;
                return (
                  <div id="panelsStayOpen" key={id}>
                    <h2 className="accordion-header">
                      <button
                        className="btn btn-primary about-button"
                        type="button">
                        {volname}
                      </button>
                    </h2>
                    <div className="aboutteam">
                      <img alt="" src={image} />
                      <h6>{heading6}</h6>
                      <a href={hyperLinkRefernce}>
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="level-4"></div>
        </div>

        <div className="commitees">
          <h3>National commitees </h3>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#NTRDC"
                type="button"
                role="tab"
                aria-controls="NTRDC"
                aria-selected="true">
                NTRDC (National Technical Research and Development commitee)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#NEC"
                type="button"
                role="tab"
                aria-controls="NEC"
                aria-selected="true">
                NEC (National Executive commitee)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#NMPC"
                type="button"
                role="tab"
                aria-controls="NMPC"
                aria-selected="true">
                NMPC (National Media and Publicity Committee)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#NLC"
                type="button"
                role="tab"
                aria-controls="NLC"
                aria-selected="true">
                NLC (National Legal Committee)
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="NTRDC"
              role="tabpanel">
              <p>
                Through its funding of forensic science research and
                development, the Technical and R&D Committee of Crime Free
                Bharat continues to advance the speed, accuracy, and scope of
                forensic analysis, which ultimately bolsters the administration
                of justice. Crime Free Bharat affirms that scientific
                advancements and technological breakthroughs are essential to
                the continued growth and strengthening of the forensic sciences.
              </p>
              <p>
                Under this portfolio, Crime Free Bharat builds and maintains the
                forensic science research infrastructure. NIJ's research and
                development funding enhance the development of:
              </p>
              <ul>
                <li>
                  Physical capital by supporting the acquisition, maintenance,
                  and development of laboratory instrumentation.{" "}
                </li>
                <li>
                  Intellectual capital by supporting researchers and providing
                  learning and training experiences for scientists at all career
                  stages.
                </li>
                <li>
                  Structural capital by funding projects that support databases
                  and add to the scientific literature.
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="NEC" role="tabpanel">
              <p>
                The mission of the Executive Committee is to advance and support
                the core science of forensics by bridging the technology gaps
                and enabling future forensic technologies through the following
                strategic goals:
              </p>
              <ol>
                <li>
                  {" "}
                  Identifying the Research, Development, Technology, and
                  Evaluation (RDT&E) needs and priorities for the forensic
                  community.
                </li>
                <li>Developing recommendations and courses of action.</li>
                <li>
                  Advising the Crime Free Bharat's Board of Directors on RDT&E
                  related issues, projects, and processes to support the
                  development of enduring future forensic capabilities.
                </li>
              </ol>
            </div>
            <div className="tab-pane fade" id="NMPC" role="tabpanel">
              <p>
                The primary role of the Media and Publicity Committee is to
                establish links with the local media and provide regular reports
                on breakthroughs in Forensic Science technologies and events and
                webinars related to crime and forensics.
              </p>
            </div>
            <div className="tab-pane fade" id="NLC" role="tabpanel">
              <p>
                The Legal Committee primarily comprises members from the legal
                fraternity to provide legal aspects of Forensics. The members
                are selected based on their experience in litigation, judgement,
                statement of jurisdiction, legal counseling, teaching, or
                writing about forensic science evidence in the legal field. The
                legal responsibilities of a forensic scientist or a forensic
                student include following procedures strictly, obeying the rules
                of evidence, and maintaining impartiality at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Division;
