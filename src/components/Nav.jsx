import { useNavigate } from "react-router-dom";

function Nav(props) {
  
  const navigate = useNavigate();
  const { coursePage } = props;

    function scrollAbout() {
        document.querySelector('.about').scrollIntoView({ block: "center", behavior: "smooth" })
      }
      function scrollCatalogue() {
        document.querySelector('.catalogue').scrollIntoView({ block: "center", behavior: "smooth" })
      }
      function scrollContacts() {
        document.querySelector('.contacts').scrollIntoView({ block: "center", behavior: "smooth" })
      }
    return (
        <section className="nav">
            <p className="nav__link" onClick={
          coursePage
            ? () => {
                navigate("/");
                console.log('789789')
              }
            : scrollAbout
        }>О нас</p>
            <p className="nav__link" onClick={
          coursePage
            ? () => {
                navigate("/");
                console.log('789789')
              }
            : scrollCatalogue
        }>Каталог</p>
            <p className="nav__link" onClick={
          coursePage
            ? () => {
                navigate("/");
                console.log('789789')
              }
            : scrollContacts
        }>Контакты</p>
        </section>
    )
}

export default Nav