import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            console.log("respons");
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  return (
    <SectionContainer
      name={"contact"}
      title="Kontakt"
      subTitle={"Zacznij z nami"}
      leftImage="static/img/title-4.jpg"
    >
      <div className="row">
        <div className="col-lg-12 m-30px-b sm-m-15px-b">
          <div className="contact-form">
            <h4 className="dark-color font-alt m-20px-b">ZACZNIJ Z NAMI</h4>
            <form className="contactform" onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      type="text"
                      placeholder="Name"
                      className="validate form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      className="validate form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      placeholder="Your Comment"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      className="form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button className="btn btn-theme" type="submit">
                      {" "}
                      Wyślij Wiadomość
                    </button>
                  </div>
                  <span
                    id="suce_message"
                    className="text-success mt-3"
                    style={{ display: success ? "block" : "none" }}
                  >
                    Wiadomość wysłana
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>{" "}
        {/* col */}
      </div>
      <div className="row">
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-location-pin" />
            <h6 className="dark-color font-alt">Adres</h6>
            <p> <a href="https://zdrofit.pl/kluby-fitness/warszawa-ochota-jerozolimskie/kadra/adrian-oleksiak"> Zdrofit Aleje Jerozolimskie </a> </p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-mobile" />
            <h6 className="dark-color font-alt">Telefon</h6>
            <p>
            <a href="tel:+48661888841">+48 661 888 841</a>
              <br /> <br /> </p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
            <i className="theme-color ti-email" />
            <h6 className="dark-color font-alt">Mail</h6>
            <p>
            adrianoleksiak@gmail.com
              <br />
              
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
