import { useNavigate } from "react-router-dom";

function CourseCard(props) {
  const {
    name,
    duration,
    desc,
    salary,
    fullDesc,
    tutor,
    days,
    time,
    skills,
    benefits,
    coursePage,
    setOpen,
    setHeading,
    img,
    detailImg,
  } = props;
  const navigate = useNavigate();

  function toggleButtons(event) {
    const card = event.target.closest(".catalogue__card");
    const buttons = card.querySelector(".card__buttons");
    const text = card.querySelector(".card__description");
    const salary = card.querySelector(".card__salary");

    if (event._reactName === "onMouseEnter") {
      buttons.classList.remove("hidden");
      text.classList.add("hidden");
      salary.classList.remove("hidden");
    } else {
      buttons.classList.add("hidden");
      text.classList.remove("hidden");
      salary.classList.add("hidden");
    }
  }

  return (
    <div
      className={`catalogue__card ${
        coursePage ? "catalogue__card--coursepage" : ""
      }`}
      onMouseEnter={
        coursePage
          ? () => {
              return;
            }
          : toggleButtons
      }
      onMouseLeave={
        coursePage
          ? () => {
              return;
            }
          : toggleButtons
      }
    >
      <div
        className="card__logo"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h4 className="card__heading blue"> {name}</h4>
      <p className="card__duration "> &#8226; {duration}ч</p>
      <p className="card__description" style={{ fontSize: `18px` }}>
        {" "}
        {coursePage ? `Средняя зарплата: ${salary}` : desc}{" "}
      </p>
      <p className="card__salary hidden">
        <b className="coursePrice">Средняя зарплата: {salary}</b>
      </p>

      {coursePage ? (
        <div className="card__buttons card__buttons--testClass detailBtn btnHide">
          <button
            onClick={() => {
              setOpen(true);
              setHeading(name);
            }}
          >
            Записаться
          </button>
        </div>
      ) : (
        <div className="card__buttons hidden btnHide">
          <button
            onClick={() => {
              setOpen(true);
              setHeading(name);
            }}
          >
            Записаться
          </button>
          <button
            onClick={() => {
              navigate("/course", {
                state: {
                  name: name,
                  desc: desc,
                  duration: duration,
                  salary: salary,
                  fullDesc: fullDesc,
                  tutor: tutor,
                  days: days,
                  time: time,
                  skills: skills,
                  benefits: benefits,
                  coursePage: true,
                  img: img,
                  detailImg: detailImg,
                },
              });
            }}
          >
            Подробнее
          </button>
        </div>
      )}
    </div>
  );
}
export default CourseCard;
