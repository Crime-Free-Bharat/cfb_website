import React from "react";
import { NavLink } from "react-router-dom";
import items from "../api/homecards";
import header from "../img/header1.jpg";
import header1 from "../img/poster.png";
import header2 from "../img/cfb3.png";
import sirimg from "../img/sir.png";
const Home = () => {
  return (
    <>
      <div class="homecarousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
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
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner">
            <div class="carousel-item active carousel1" data-bs-interval="2000">
              <img src={header} alt="Crime Free Bharat" />
            </div>

            <div class="carousel-item carousel1" data-bs-interval="2000">
              <img src={header1} alt="Crime Free Bharat" />
            </div>

            <div class="carousel-item carousel1" data-bs-interval="2000">
              <img src={header2} alt="Crime Free Bharat " />
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* section second start  */}

      <section id="aboutsection">
        <div class="homesec1">
          <div class="div1">
            <img src={sirimg} alt="Maithili Sharn Gupta's " />
            <h3>Maithili Sharn Gupta</h3>
            <p>
              President of Crime Free Bharat Mission <br />
              Former DGP, Police Reforms, Madhya Pradesh
            </p>
            <br />
          </div>
          <div class="div2">
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
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ipsmessage"
            >
              View Message
            </button>
            <div class="modal fade" id="ipsmessage" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Message From IPS</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ex massa, commodo sit amet neque eget, gravida
                      tempor est. Integer condimentum ipsum eu ex ornare, vel
                      ullamcorper turpis faucibus. Fusce fermentum enim et
                      lectus porta, ut faucibus magna sollicitudin. Duis et
                      neque ut odio aliquam auctor a nec nisl.{" "}
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-bs-dismiss="modal"
                    >
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

          <div class="homesec2">
            <div class="video">
              <h4>
                <span> Video Gallery</span>
              </h4>
              <div
                id="videogallery"
                class="carousel slide"
                data-ride="carousel"
                data-interval="0"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <iframe
                      width="620vw"
                      height="270vh"
                      src="https://www.youtube.com/embed/ky5JsWhlhNk"
                      title="YouTube video player"
                    ></iframe>
                  </div>

                  <div class="carousel-item">
                    <iframe
                      width="620vw"
                      height="270vw"
                      src="https://www.youtube.com/embed/XpVNIE88SXE"
                      title="YouTube video player"
                    ></iframe>
                  </div>

                  <div class="carousel-item">
                    <iframe
                      width="620vw"
                      height="270vw"
                      src="https://www.youtube.com/embed/VK0yooK6G0w"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#videogallery"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#videogallery"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div class="updates">
              <h4>
                <span>Updates</span>
              </h4>
              <marquee
                behavior="scroll"
                direction="up"
                scrollamount="3"
                height="70%"
              >
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
            <div class="photogallery"></div>
          </div>
        </div>
      </section>

      <section class="homesec3" id="homecardsection">
        <div id="cards">
          <div>
            <h2> Featured Activities</h2>
          </div>
          <hr />
          <div class="Homecard">
            {items.map((element) => {
              const { id, image, heading, alt, paragraph, hyperLinkRefernce } =
                element;
              return (
                <>
                  <div class="card" key={id}>
                    <div class="img">
                      <img src={image} alt={alt} />
                    </div>
                    <div class="cardcontent">
                      <h5>{heading}</h5>
                      <p>{paragraph}</p>
                      <div class="readmore">
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
