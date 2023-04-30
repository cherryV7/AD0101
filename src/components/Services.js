import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"Aktywność"}
      subTitle={"Odkryj pasję do zdrowego stylu życia razem z nami"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Nadchodzące obozy</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-check" />
                  <span className="dark-color">Kozienice💪🏋️‍♀️🤸‍♂️🏃‍♀️🧘‍♂️🥊🏊‍♂️🚴‍♀️🏋️‍♂️🤾‍♀️🤽‍♂️🤸‍♀️🧗‍♂️🏋️‍♀️🤼‍♂️🤹‍♂️</span>
                  <label>Czerwiec 2023</label>
                </div>
                <div className="r-info">
                  <p>
                  Przyjdź na nasz obóz w Kozienicach i dołącz do naszej grupy osób, które kochają aktywny styl życia i chcą osiągnąć swoje cele fitness.
                  Podczas naszego obozu w Kozienicach nie tylko poprawisz swoją kondycję i sylwetkę, ale także poznamy wspaniałych ludzi, którzy podzielają Twoje pasje i zmotywują Cię do działania.
                  Nie czekaj dłużej, dołącz do nas już dziś i zobacz jakie pozytywne zmiany może przynieść aktywny wypoczynek na naszym obozie w Kozienicach!

                  </p><p>
                  <p>‎‎‎</p>

                  Skontaktuj się z nami po szczegóły!
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-calendar-alt"/> 
                  <span className="dark-color">Już niedługo podamy kolejną lokalizacje obozu!</span>
                  <label>Bądź uważny i śledź nasze sociale</label>
                </div>
                <div className="r-info">
                <i class="fab fa-instagram fa-lg"></i>
                <a href="https://www.instagram.com/adrian_oleksiak/">adrian_oleksiak</a>
                <p>
                  
                  </p>
                  <i class="fab fa-instagram fa-lg"></i>
                <a href="https://www.instagram.com/jedenteam/">JEDENTEAM</a>
                <p>
                  
                  </p>
                  <i class="fab fa-facebook fa-lg"></i>
                <a href="https://www.facebook.com/TrenerAdrianOleksiak">TrenerAdrianOleksiak</a>
                  <p>
                  
                  </p>
                  <i class="fab fa-linkedin fa-lg"></i>
                  <a href="https://www.linkedin.com/in/adrian-oleksiak-7bb26593/">Adrian Oleksiak</a>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Zajęcia i treningi</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-star" />
                  <span className="dark-color">Zajęcia</span>
                  <label>Zdrofit Aleje Jerozolimskie</label>
                </div>
                <div className="r-info">
                  <p>
                  Nasze zajęcia to intensywny trening, 
                    który pozwoli Ci spalić kalorie i zbudować mięśnie, jednocześnie poprawiając kondycję i wytrzymałość.
                    Poprowadzone przez doświadczonych trenerów, zapewnią Ci motywację i wsparcie, aby osiągnąć swoje cele i poczuć się świetnie we własnym ciele.
                    Dołącz do nas, aby doświadczyć energii i pozytywnych efektów naszych zajęć fitness.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Treningi</span>
                  <label>Zdrofit Aleje Jerozlimskie i prowadzenie online</label>
                </div>
                <div className="r-info">
                  <p>
                  Treningi Personalne to idealne rozwiązanie dla osób poszukujących spersonalizowanej i skutecznej formy treningu. Pomożemy Ci osiągnąć Twoje cele. Indywidualne podejście pozwala na dostosowanie treningu do Twoich potrzeb, niezależnie od Twojego poziomu zaawansowania. Bądź gotowy na nowe wyzwania i osiągaj swoje cele w krótszym czasie dzięki treningom personalnym!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
     
    </SectionContainer>
  );
};
export default Services;
