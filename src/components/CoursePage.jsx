import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import CourseCard from "./CourseCard";
import Modal from "./Modal";

function CoursePage(props) {
  const data = useLocation();
  const {
    name,
    desc,
    duration,
    salary,
    fullDesc,
    tutor,
    days,
    time,
    skills,
    // benefits,
    coursePage,
    img,
    detailImg,
  } = data.state;
  const { isOpen, setOpen, heading, setHeading, target, setTarget } = props;

  return (
    <div className="course main">
      <Nav coursePage={coursePage} target={target} setTarget={setTarget}></Nav>
      <div className="courseMainBox">
        <div className="mainTitle"> 
          <div className="blue heading">Каталог</div>
        </div>
        <div className="course__body">
          <CourseCard
            name={name}
            desc={desc}
            duration={duration}
            salary={salary}
            coursePage={coursePage}
            img={img}
            isOpen={isOpen}
            setOpen={setOpen}
            heading={heading}
            setHeading={setHeading}
          ></CourseCard>
          <div className="course__full-description">{fullDesc}</div>
          <div
            className="course__image"
            style={{ backgroundImage: `url(${detailImg})` }}
          ></div>
          <div className="course__details">
            <b> Преподаватель:</b> <span> {tutor} </span> <br />
            <br /> <b> Расписание:</b> <span> {days} </span> <br />
            <br />
            <b>Время:</b> <span> {time} </span> <br />
            <br />
            <b> Вы научитесь:</b> <span> {skills} </span> <br />
            <br />
            <b> Вы получите:</b>{" "}
            <span> Сертификат о прохождении курса "{name}" </span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setOpen={setOpen}
        heading={heading}
        setHeading={setHeading}
      ></Modal>
    </div>
  );
}

export default CoursePage;
