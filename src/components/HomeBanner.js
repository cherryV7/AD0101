import { useContext } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img src="static/img/user.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h2 className="dark-color">Adrian Oleksiak</h2>
                    <h1 className="dark-color">JEDEN TEAM</h1>
                    <h1 className="dark-color"></h1>
                     <p> <h1><TypingAnimation /></h1> </p>
                    {/*<div className="btn-bar">
                      <a href="#" className="btn btn-theme">
                        Download CV
                      </a>
                    </div>*/}
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/ardian.oleksiak.5">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="twitter" href="https://twitter.com/adiwuela">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="google" href="https://www.instagram.com/adrian_oleksiak/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/in/adrian-oleksiak-7bb26593/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
