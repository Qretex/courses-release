function Modal(props) {
const {isOpen, setOpen, heading, setHeading} = props

function handleSubmit(e) {
    e.preventDefault()
    
    const data = new FormData(e.target)
    const value = Object.fromEntries(data.entries());
    value.course = heading
    console.log(value)
    e.target.querySelectorAll('.modal__input').forEach((item)=>{item.value=''})

    setOpen(false) 
    setHeading('')
}

    return ( 
        <div className={`modal__overlay ${isOpen ? "" : "hidden"}`}>
            <div className="modalMainBox">
                <form className="modal__form" onSubmit={handleSubmit}>
                    <h4 className="modal__heading">{heading}</h4>
                    <p className="modal__subheading">Введите информацию в поля ниже:</p>
                    <div className="modal__input-container"><p>Ваше имя</p><input className="modal__input" type="text" name="name" id="123" required/></div>
                    <div className="modal__input-container"><p>Ваш телефон</p><input className="modal__input" type="text" name="phone" id="456" required/></div>
                    <div className="modal__input-container"><p>Комментарий</p><textarea className="modal__input comment" type="text" name="comment" id="789" /></div>
                    <button className="modal__button-submit">Отправить</button>
                </form>
                <button className="modal__button-close" onClick={()=>{
                    setOpen(false)
                }}></button>
                </div>
        </div>
    )
}
export default Modal