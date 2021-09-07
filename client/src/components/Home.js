import React from "react";

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
              <img src="img/header1.jpg" alt="Crime Free Bharat" />
            </div>

            <div class="carousel-item carousel1" data-bs-interval="2000">
              <img src="img/poster.png" alt="Crime Free Bharat" />
            </div>

            <div class="carousel-item carousel1" data-bs-interval="2000">
              <img src="img/cfb3.png" alt="Crime Free Bharat " />
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
      <section>
        <div class="homesec1">
          <div class="div1">
            <img src="img/sir.png" alt="Maithili Sharn Gupta's image" />
            <h3>Maithili Sharn Gupta</h3>
            <p>
              President of Crime Free Bharat Mission <br />
              Former DGP, Police Reforms, Madhya Pradesh
            </p>
            <br />
          </div>
          <div class="div2">
            <h3>
              <span>About</span> CFB
            </h3>
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
            <a href="about.html">Read More...</a>
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

      <section>
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
                    height="270vw"
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
                  <a>Update 1</a>
                </li>
                <li>
                  <a>Update 2</a>
                </li>
                <li>
                  <a>Update 3</a>
                </li>
                <li>
                  <a>Update 4</a>
                </li>
                <li>
                  <a>Update 5</a>
                </li>
              </ul>
            </marquee>
          </div>
          <div class="photogallery"></div>
        </div>
      </section>

      <section class="homesec3">
        <div id="cards">
          <div>
            <h2> Featured Activities</h2>
          </div>
          <div class="Homecard">
            <div class="card">
              <div class="img">
                <img src="img/cfb1.png" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ex massa, commodo sit amet neque eget..
                </p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="img">
                <img src="img/cfb3.png" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p> hello world</p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="img">
                <img src="img/cfb2.png" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p></p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="img">
                <img src="img/cfb7.png" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p></p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="img">
                <img src="img/cfb6.png" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p></p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="img">
                <img src="img/cfb2.png" alt="cfb" />
              </div>
              <div class="cardcontent">
                <h5>Heading 1</h5>
                <p></p>
                <div class="readmore">
                  {" "}
                  <a href="#">Read More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
