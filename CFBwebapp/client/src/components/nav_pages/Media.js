import React from "react";
import { NavLink } from "react-router-dom";
import cfb1 from "../../img/cfb1.png";
import cfb2 from "../../img/cfb2.png";
import cfb3 from "../../img/cfb3.png";
import cfb4 from "../../img/cfb4.png";
import cfb5 from "../../img/cfb5.png";
import cfb6 from "../../img/cfb6.png";


function Media() {
  return (
    <section id="" class="section sectionmedia">
      <div class="containermdia">
        <br />
        <div class="row">
          <div class="col-sm-12">
            <h3 class="sectionheadact">Media And Gallery</h3>
            <p class="sectionparaact">
              It is more important to click with people than to click the
              shutter.
            </p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-12">
            <h5 class="sectionheadact" style={{ fontSize: "28px" }}>
              Youtube Videos
            </h5>
          </div>
          {/* <!-- Modal gallery --> */}
          {/* <!-- Section: Images --> */}
          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div
                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src={cfb1} class="w-100" alt=""/>
                  <NavLink
                    to="#!"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal1"
                  >
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </NavLink>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div
                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src={cfb2} class="w-100" alt=""/>
                  <NavLink
                    to="#!"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal2"
                  >
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </NavLink>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div
                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src={cfb3} class="w-100" alt=""/>
                  <NavLink
                    to="#!"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal3"
                  >
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Images --> */}

          {/* <!-- Section: Modals --> */}
          <section class="">
            {/* <!-- Modal 1 --> */}
            <div
              class="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModal1Label"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/wcmnpkZzEkQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div class="text-center py-3">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-mdb-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal 2 --> */}
            <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModal2Label"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/ZpXOxW3BXYU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div class="text-center py-3">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-mdb-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal 3 --> */}
            <div
              class="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModal3Label"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/LF0CtXGPB_o"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div class="text-center py-3">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-mdb-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Modal gallery --> */}
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-sm-12">
            <h5 class="sectionheadact" style={{ fontSize: "28px" }}>
              CFB Gallery
            </h5>
          </div>
          {/* <!-- Gallery --> */}
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={cfb1}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
              <img
                src={cfb2}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={cfb3}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
              <img
                src={cfb4}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={cfb5}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
              <img
                src={cfb6}
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Gallery --> */}
        </div>
      </div>
    </section>
  );
}
export default Media;
