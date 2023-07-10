
import "../Form/form.css"


const Form= () => {

    return(
        <div>
            <div>
                <form className="contactForm" action="">
                    <div className="name">
                        <input type="text" name="name" id="name" required/><label htmlFor="name">Ad</label>

                    </div>
                    <div className="surname">
                        <input type="text" name="surname" id="surname" required/><label htmlFor="surname">Soyad</label>

                    </div>
                    <div className="phone">
                        <input type="tel" name="phone" id="phone" required/><label htmlFor="phone">Telefon Numarası</label>

                    </div>
                    <div className="message">
                        <input type="text" name="message" id="message" placeholder="Mesajınız..."/>
                    </div>
                    
                    <input type="submit" value="Gönder" />
                </form>


            </div>


        </div>


    )


}
export default Form