import React from "react";
import {NavLink} from "react-router-dom";
import cfb1 from "../../img/youtubemediaimg1.png";
import cfb2 from "../../img/youtubemediaimg2.png";
import cfb3 from "../../img/youtubemediaimg3.png";
import cfb4 from "../../img/cfb4.png";
import cfb5 from "../../img/cfb5.png";
import cfb6 from "../../img/cfb6.png";

function Media() {
  return (
    <section id="" className=" sectionmedia">
      <div className="containermdia">
        <br />
        <div className="row">
          <div className="col-sm-12">
            <h3 className="sectionheadact">Media And Gallery</h3>
            <p className="sectionparaact">
              It is more important to click with people than to click the
              shutter.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <h5 className="sectionheadact" style={{fontSize: "28px"}}>
              Youtube Videos
            </h5>
          </div>
          {/* <!-- Modal gallery --> */}
          {/* <!-- Section: Images --> */}
          
            <div className="mediaYoutube">
              <div className="mediaYoutube1">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light">
                 
                  <NavLink
                    to="/activity/#mediayoutubevideo1"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal1"> <img src={cfb1} className="w-100 mediaYoutubeimg" alt="" />
                    <div
                      className="mask"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.2)",
                      }}></div>
                  </NavLink>
                </div>
              </div>

              <div className="mediaYoutube1">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light">
                 
                  <NavLink
                    to="/activity/#mediayoutubevideo2"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal2"> <img src={cfb2} className="w-100 mediaYoutubeimg" alt="" />
                    <div
                      className="mask"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.2)",
                      }}></div>
                  </NavLink>
                </div>
              </div>

              <div className="mediaYoutube1">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light">
                 
                  <NavLink
                    to="/activity/#mediayoutubevideo3"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal3"> <img src={cfb3} className="w-100 mediaYoutubeimg" alt="" />
                    <div
                      className="mask"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.2)",
                      }}></div>
                  </NavLink>
                </div>
              </div>
            </div>
       






       
          {/* <!-- Section: Images --> */}

          {/* <!-- Section: Modals --> */}
          <section className="">
            {/* <!-- Modal 1 --> */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModal1Label"
              aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/wcmnpkZzEkQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>

                  <div className="text-center py-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-mdb-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal 2 --> */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModal2Label"
              aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/ZpXOxW3BXYU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>

                  <div className="text-center py-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-mdb-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal 3 --> */}
            <div
              className="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModal3Label"
              aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/LF0CtXGPB_o"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                  </div>

                  <div className="text-center py-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-mdb-dismiss="modal">
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
        <div className="row">
          <div className="col-sm-12">
            <h5 className="sectionheadact" style={{fontSize: "28px"}}>
              CFB Gallery
            </h5>
          </div>
          {/* <!-- Gallery --> */}
          <div className="mediaYoutube">
         
                <div className="mediaYoutube1">
              <img
                src={cfb4}
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
            <div className="mediaYoutube1">
              <img
                src={cfb5}
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              /> </div> <div className="mediaYoutube1"> 
              <img
                src={cfb6}
                className="w-100 shadow-1-strong rounded mb-4"
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
