import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.all";
import logo from "../img/logo2.png";
import languages from "../api/languages";

import {useTranslation} from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

const Navbar = () => {
  const currentLanguageCode = cookies.get("i18next");
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
  const {t} = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <header>
        <div className="nav1">
          <b>
            <p>{t("title")}</p>
          </b>

          <div className="nav1-right">
            <div className="navsocial">
              <a
                href="https://twitter.com/bharat_free?s=20"
                target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/crimefreebharat_official/"
                target="_blank " rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/crimefreebharat/mycompany/"
                target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCAmspcG5fQmPgi1LxBprpRg"
                target="_blank " rel="noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <NavLink to="#">
              <div className="container ">
                <div className="language-select">
                  <div className="d-flex justify-content-center align-items-center language-select-root">
                    <div className="dropdown">
                      <button
                        className="btn-default dropdown-toggle language"
                        type="button"
                        data-bs-toggle="dropdown"
                        >
                        {t("language")}
                      </button>
                      <ul

                        className="dropdown-menu language"
                        aria-labelledby="dropdownMenuButton1">
                        <li>
                          <span className="dropdown-item-text">
                            {t("language")}
                          </span>
                        </li>
                        {languages.map(({code, name, country_code}) => (
                          <li key={code}>
                            <button
                              className={classNames("dropdown-item", {
                                disabled: currentLanguageCode === code,
                              })}
                              onClick={() => {
                                i18next.changeLanguage(code);
                              }}>
                              <span
                                className={`flag-icon flag-icon-${country_code} mx-2`}
                                style={{
                                  opacity:
                                    currentLanguageCode === code ? 0.5 : 1,
                                }}></span>
                              {name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="nav1lang">language</div> */}
            </NavLink>
            <NavLink to="/preauth">
              <div className="nav1login">{t("login/signup")}</div>
            </NavLink>
          </div>
        </div>
       <nav class="navbar navbar-expand-lg ">
        <div className="nav2 main container-fluid">
          <NavLink to="/">
            <img src={logo} alt="logo_crime_free_bharat" />
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" >
          <i class="bi bi-list"></i>
    </button>

          <div className="menu offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg">
          <div class="offcanvas-header">
    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Mission Crime Free Bharat</h6>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
            <NavLink to="/">
              <div className="home nav__items">
                <i class="bi bi-house-door"></i>
                <br />
                <p>{t("Home")}</p>
              </div>
            </NavLink>
            <NavLink to="/about">
              <div className="about nav__items">
                <i className="bi bi-person-lines-fill"></i>
                <br />
                <p>{t("About_us")}</p>
              </div>
            </NavLink>
            <NavLink to="/services">
              <div className="service nav__items">
                <i className="bi bi-gear-wide-connected"></i> <br />
                <p>{t("Services")}</p>
              </div>
            </NavLink>
            <NavLink to="/Division">
              <div className="division nav__items">
                <i className="bi bi-diagram-3"></i>
                <br />
                <p>{t("CFB_division")}</p>
              </div>
            </NavLink>
            <NavLink to="/anr">
              <div className="act nav__items">
                <i className="bi bi-file-earmark-ruled"></i> <br />
                <p>{t("Act_and_Regulations")}</p>
              </div>
            </NavLink>
            <NavLink to="/report">
              <div className="report nav__items">
                <i className="bi bi-flag"></i> <br />{" "}
                <p>{t("Report_a_crime")} </p>
              </div>
            </NavLink>
            <NavLink to="/media">
              <div className="media nav__items">
                <i className="bi bi-soundwave"></i> <br /> <p>{t("media")}</p>
              </div>
            </NavLink>
            <NavLink to="/activity">
              <div className="activity nav__items">
                <i className="bi bi-hand-index-thumb"></i>
                <br /> <p>{t("CFB_Activities")} </p>
              </div>
            </NavLink>
            <NavLink to="/contact">
              <div className="contact nav__items">
                <i className="bi bi-telephone-plus"></i>
                <br />
                <p>{t("Contact_Us")} </p>
              </div>
            </NavLink>
          </div>
        </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
