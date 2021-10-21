import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import items from "../api/homecards";
import header from "../img/header1.jpg";
import header1 from "../img/poster.png";
import header2 from "../img/cfb3.png";
import sirimg from "../img/sir.png";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import languages from "../api/languages";

const Home = () => {
  const currentLanguageCode = Cookies.get("i18next");
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
  const {t} = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <>
      <div className="homecarousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
            <div
              className="carousel-item active carousel1"
              data-bs-interval="2000">
              <img src={header} alt="Crime Free Bharat" />
            </div>

            <div className="carousel-item carousel1" data-bs-interval="2000">
              <img src={header1} alt="Crime Free Bharat" />
            </div>

            <div className="carousel-item carousel1" data-bs-interval="2000">
              <img src={header2} alt="Crime Free Bharat " />
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* section second start  */}

      <section id="aboutsection">
        <div className="homesec1">
          <div className="div1">
            <img src={sirimg} alt="Maithili Sharn Gupta's " />
            <div classNameName="mt-1">
              <h3>{t('Dgp')} </h3>
              <p>
                {t('small_about')}
                {/* President of Crime Free Bharat Mission 
                Former DGP, Police Reforms, Madhya Pradesh */}
              </p>
            </div>
            <br />
          </div>
          <div className="div2">
            <h2>
              <span>About</span> CFB
            </h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex
              massa, commodo sit amet neque eget, gravida tempor est. Integer
              condimentum ipsum eu ex ornare, vel ullamcorper turpis faucibus.{" "}
              <br />
              <br />
              Fusce fermentum enim et lectus porta, ut faucibus magna
              sollicitudin. Duis et neque ut odio aliquam auctor a nec nisl.
              Phasellus ac tortor finibus, dapibus felis eget, elementum massa.
              Sed aliquet iaculis lorem sed rutrum. Sed laoreet ligula quis
              ligula efficitur aliquam.
            </p>
            <NavLink to="./about"> Read More...</NavLink>
            <br />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ipsmessage"
              >
                  View Message
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ipsacheivement">
              Acheivements
            </button>
            <div className="modal fade" id="ipsacheivement" role="dialog">
              <div className="modal-dialog modal-dialog-scrollable ipsacheivement ">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h4 className="modal-title">Acheivement of IPS maithili sharan Gupta sir</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                    
There are many <strong>achievements</strong>  and <strong>awards</strong>  that Maithaili Sir have receieved in his career and all of
that started with his Masters. He did his M.Tech. from Indian Institute of Technology, Delhi in
Industrial Engineering. His very first achievement was becoming an IPS Officer and was offically
appointed on 17th Dec 1984 which was one of the biggest milestone and starting point of his
journey. Though his journey was full of uncertainty, impossibility but he was ready for every
hardship that might come in his path.
After working for his country for 36 years with extreme hard work and patience; he was
appointed as Director General of Police(DGP) after that he has been working in many projects to
bring positive reforms in India. It is his mission towards Crime Free Bharat, an unwavering resolve
that will never stop until his dream is achieved.
<br /><br /> <h4>Currently now he is -</h4>
<ul>
  <li>Empowering railway passengers through all India group (A reporting supervisory app, investigator
app, Railway stakeholders app).</li>
  <li>Trying to create a responsive and monitoring system for disaster management. A system capable
of predicting disaster as well as a proactive disaster management such as (mobilizing local
resources ,shifting population to safer location)</li>
  <li>An Automated Investigation System for illegal arms mafia, illegal selling of drugs and narcotics
and also human trafficking mafias to find them and ensure total demolition of their networking
along its distribution networks.</li>
  <li>The software checks the safety of road and identifing black spots(death prone spots) using 3Es
(Engineering, Education and Enforcement) by reducing the risks of accidents to 50%.</li>
</ul></p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>  
          
            <div className="modal fade" id="ipsmessage" role="dialog">
              <div className="modal-dialog ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Message From IPS</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ex massa, commodo sit amet neque eget, gravida
                      tempor est. Integer condimentum ipsum eu ex ornare, vel
                      ullamcorper turpis faucibus. Fusce fermentum enim et
                      lectus porta, ut faucibus magna sollicitudin. Duis et
                      neque ut odio aliquam auctor a nec nisl.{" "}
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videosection">
        <div id="cards">
          <div>
            <h2>Gallaries & Updates</h2>
          </div>
          <hr />

          <div className="homesec2">
            <div className="video">
              <h4>
                <span> Video Gallery</span>
              </h4>
              <div
                id="videogallery"
                className="carousel slide"
                data-ride="carousel"
                data-interval="0">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <iframe
                      width="620vw"
                      height="270vh"
                      src="https://www.youtube.com/embed/ky5JsWhlhNk"
                      title="YouTube video player"></iframe>
                  </div>

                  <div className="carousel-item">
                    <iframe
                      width="620vw"
                      height="270vw"
                      src="https://www.youtube.com/embed/XpVNIE88SXE"
                      title="YouTube video player"></iframe>
                  </div>

                  <div className="carousel-item">
                    <iframe
                      width="620vw"
                      height="270vw"
                      src="https://www.youtube.com/embed/VK0yooK6G0w"
                      title="YouTube video player"></iframe>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#videogallery"
                  data-bs-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#videogallery"
                  data-bs-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="updates">
              <h4>
                <span>Updates</span>
              </h4>
              <marquee
                behavior="scroll"
                direction="up"
                scrollamount="3"
                height="70%">
                <ul>
                  <li>
                    <NavLink to="#">Update 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Update 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Update 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Update 4</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Update 5</NavLink>
                  </li>
                </ul>
              </marquee>
            </div>
            <div className="photogallery"></div>
          </div>
        </div>
      </section>

      <section className="homesec3" id="homecardsection">
        <div id="cards">
          <div>
            <h2> Featured Activities</h2>
          </div>
          <hr />
          <div className="Homecard">
            {items.map(element => {
              const {id, image, heading, alt, paragraph, hyperLinkRefernce} =
                element;
              return (
                <>
                  <div className="card" key={id}>
                    <div className="img">
                      <img src={image} alt={alt} />
                    </div>
                    <div className="cardcontent mt-2">
                      <h5>{heading}</h5>
                      <p>{paragraph}</p>
                      <div className="readmore">
                        <NavLink to={hyperLinkRefernce}>Read More...</NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
