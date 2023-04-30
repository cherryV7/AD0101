import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">KOSZULKI i GADŻETY</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <h4>
             Koszulki treningowe męskie
            </h4>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/meskie.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span></span>
              <label></label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <h4>
             Koszulki treningowe damskie
            </h4>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/damskie.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span></span>
              <label></label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <h4>
              Kubki do kawy
            </h4>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/kubki.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span></span>
              <label></label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
