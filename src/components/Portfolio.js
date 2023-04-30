import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"Nasze Wydarzenia"}
      subTitle={"SPRAWDŹ JAK ŁATWO ZADBAĆ O ZDROWIE, A PRZY TYM ŚWIETNIE SIĘ BAWIĆ"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              Wszystko
            </li>{" "}
            <li
              className={`${activeBtn("photoshop")} theme-after`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Obóz
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Trening
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Zajęcia
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-2img">
                  <a href="#">
                    <img src="static/img/portfolio-2.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://www.instagram.com/p/CqpkjVYoDRt/"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-2.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Zdrofit Fitness</h5>
                  <span>Zajęcia</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-1.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://www.instagram.com/reel/CqSB_LSos8m/"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Camp Wiosełko</h5>
                  <span>Obóz</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-3.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://www.instagram.com/p/CrltF2YoIlK/"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-3.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Trening allbody</h5>
                  <span>Trening</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-4.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href=""
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Fitness w parku</h5>
                  <span>Zajęcia</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-5.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-5.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-6.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-6.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
