import Nav from "./Nav";
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function Main(props) {
  const { isOpen, setOpen, heading, setHeading, target, setTarget } = props;

  //retrieval of data from the API
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://0.0.0.0:1337/api/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const cards = data.data;
        //console.log(cards)
        cards.forEach((element) => {
          //console.log(element.attributes.previewImageUrl)
        });
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //массив с карточками
  function scrollAbout() {
    document
      .querySelector(".about")
      .scrollIntoView({ block: "center", behavior: "smooth" });
  }
  function scrollCatalogue() {
    document
      .querySelector(".catalogue")
      .scrollIntoView({ block: "center", behavior: "smooth" });
  }
  function scrollContacts() {
    document
      .querySelector(".contacts")
      .scrollIntoView({ block: "center", behavior: "smooth" });
  }

  useEffect(() => {
    if (target === ".about") {
      scrollAbout();
      setTarget("");
    } else if (target === ".contacts") {
      scrollContacts();
      setTarget("");
    } else if (target === ".catalogue") {
      scrollCatalogue();
      setTarget("");
    }
  });

  return (
    <main className="main">
      <Nav></Nav>
      <section className="intro blue">
        <div className="intro__logo"></div>
        <h1 className="intro__heading">My Courses</h1>
        <button className="intro__button" onClick={scrollCatalogue}>
          Учиться
        </button>
      </section>
      <section className="about">
        <div className="blue heading">О нас</div>
        <div className="about__cards">
          <div className="card-one">
            <div className="about__fact">
              <div className="about__icon"></div>
              <p className="about__text">
                В 2024 году обновили материалы по TypeScript 5 и React 18
              </p>
            </div>
            <div className="about__fact">
              <div className="about__icon"></div>
              <p>Десятки практических задач, повторяющих реальные рабочие</p>
            </div>
            <div className="about__fact">
              <div className="about__icon"></div>
              <p>Возможность собрать своё портфолио в процессе обучения</p>
            </div>
            <div className="about__fact">
              <div className="about__icon"></div>
              <p>Лучшие подходы к образованию, нацеленные на результат</p>
            </div>
            <div className="about__fact">
              <div className="about__icon"></div>
              <p>Индивидуальный подход к каждому</p>
            </div>
            <div className="about__fact">
              <div className="about__icon"></div>
              <p>
                Развитие софтскилов для быстрого входа в IT и работы в команде
              </p>
            </div>
          </div>
          <div className="card-two blue">
            <b className="blue">“My Courses”</b> - лучшая возможность
            организовать Ваше саморазвитие в области дополнительных
            IT-квалификаций!
          </div>
          <div className="card-three large">20+ ПРАКТИЧЕСКИХ ЗАДАНИЙ</div>
          <div className="card-four large">ДОСТУПНЫЕ ЦЕНЫ</div>
          <div className="card-five blue">
            <b className="blue">Наши курсы</b> дешевле, чем на других
            популяряных платформах, лекции проходят в очном формате, что
            обеспечивает постоянное взаимодействие с кураторами!
          </div>
          <div className="card-six blue">
            <b className="blue">В конце</b> вы получите диплом государственного
            образца, возможность стажировки на нашей площадке, а также
            ознакомитесь с крутыми стартапами и проектами!
          </div>
          <div className="card-seven large">БОЛЬШЕ ЧЕМ КУРСЫ</div>
        </div>
      </section>
      <section className="catalogue">
        <div className="blue heading">Каталог</div>
        <div className="catalogue__cards">
          {cards.map((card) => (
            <CourseCard
              key={card.attributes.name}
              name={card.attributes.name}
              duration={card.attributes.hours}
              desc={card.attributes.previewText}
              salary={card.attributes.salary}
              fullDesc={card.attributes.detailText[0].children[0].text}
              tutor={card.attributes.teacher}
              days={card.attributes.timetable}
              time={card.attributes.time}
              skills={card.attributes.willLearn}
              coursePage={false}
              isOpen={isOpen}
              setOpen={setOpen}
              heading={heading}
              setHeading={setHeading}
              img={card.attributes.previewImageUrl}
              detailImg={card.attributes.detailImageUrl}
            ></CourseCard>
          ))}
        </div>
      </section>
      <section className="contacts">
        <div className="blue heading">Контакты</div>
        <iframe
          title="yandex"
          id="123"
          src="https://yandex.ru/map-widget/v1/?ll=30.329502%2C59.934600&mode=search&oid=192927373843&ol=biz&z=16.45"
          className="contacts__map"
        ></iframe>

        <div className="contacts__details">
          <div className="contacts__adress">
            <p>Наш адрес:</p>
            <p className="blue">Орехово-Зуево, ул. Ленина, д. 55</p>
          </div>
          <div className="contacts__hours">
            <p>Пн-Сб:</p>
            <p className="blue">08:00 – 18:00</p>
          </div>
          <div className="contacts__logos">
            <a href="https://vk.com/pecggtu">
              <div className="contacts__logo-vk"></div>
            </a>
            <a href="https://web.telegram.org/a/#-1001748324494">
              <div className="contacts__logo-tg"></div>
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Modal
        isOpen={isOpen}
        setOpen={setOpen}
        heading={heading}
        setHeading={setHeading}
      ></Modal>
    </main>
  );
}

export default Main;
