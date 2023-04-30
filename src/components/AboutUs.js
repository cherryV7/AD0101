import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"O nas"}
      subTitle={"Poznaj Naszą Historię i Misję"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={""}
    >
      <div className="row">
        <div className="col-md-4">
          <img src="static/img/my-pic.jpg" title alt />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">Adrian Oleksiak</h3>
            <p className="m-0px">
            Absolwent Akademii Wychowania Fizycznego w Warszawie. Cerftyfikowany trener personalny i grupowy. Pedagog, założyciel grupy Treningowej #JEDENTEAM . Wychowany w sportowym duchu. Specjalizuje się w zajęciach treningu funkcjonalnego oraz takich form jak cross, kettlebel i brzuch. Ma na swoim koncie liczne osiągnięcia metamorfoz z klientami/klientkami oraz sukcesy na arenie krajowej. Na zajęciach wymagający i asertywny. Z uśmiechem podchodzi do życia, a na treningach stwarza niesamowitą atmosferę. Laureat nagrody Trener Roku by PEI 2020, która jest podsumowaniem osiągnięć i uznaniem dla ciężkiej pracy. Za jego charyzmą idzie tłum. Prywatnie szczęśliwy Tata dwóch synków. W przeszłości Trenujący Piłkę nożną oraz CrossFit.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-target" />
                <div className="feature-content">
                  <h5 className="dark-color">Treningi</h5>
                  <p>
                  Dołącz do
                  <a href="https://www.facebook.com/groups/677842469669747"> #JEDENTEAM </a></p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />
                <div className="featurethem-content">
                  <h5 className="dark-color">Camp</h5>
                  <p>
                  Już teraz zapisz się na kolejny <a href="https://www.facebook.com/groups/677842469669747"> camp</a>!
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-medall" />
                <div className="feature-content">
                  <h5 className="dark-color">Fitness</h5>
                  <p> Zapisz się na <a href="https://zdrofit.pl/kluby-fitness/warszawa-ochota-jerozolimskie/kadra/adrian-oleksiak"> Zajęcia</a> w Zdrofit Aleje Jerozolimskie</p>
                  
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-shopping-cart" />
                <div className="feature-content">
                  <h5 className="dark-color">Odziej się!</h5>
                  <p>
                    Dorwij ubrania #JEDENTEAM i pokaż nam jak w nich ćwiczysz 
                  </p>
                  
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-face-smile" />
                <div className="feature-content">
                  <h5 className="dark-color">Sponsorzy</h5>
                  <p>
                    Sprawdź pyszne diety naszego sponsora: 
                  </p>
                  <a href="https://ntfy.pl/konfigurator">NiceToFitYou</a> <p> -10% na hasło jedenteam</p>

                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
         {/* <div className="btn-bar">
            <a href="#" className="btn btn-theme">
              Download CV
            </a>
          </div>*/}
        </div>
      </div>{" "} 
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}{/*
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-face-smile" />
                <div className="count dark-color">375</div>
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}{/*
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-headphone" />
                <div className="count dark-color">375</div>
                <h6>Telephonic Talk</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}{/*
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-camera" />
                <div className="count dark-color">375</div>
                <h6>Photo Capture</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}{/*
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-thumb-up" />
                <div className="count dark-color">375</div>
                <h6>Projects</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}{/*
        </div>{" "}
        {/* row */}{/*
      </div> */}
    </SectionContainer>
  );
};
export default AboutUs;
