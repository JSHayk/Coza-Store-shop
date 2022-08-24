import "./ContactInfo.scss"
import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

const ContactInfo = () => {
  return (
    <div className='contact-info'>
        <div className="contact-info-item">
            <i><IoLocationOutline /></i>
           <div className="column">
                <h1>Addresss</h1>
                <p className="base">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
           </div>
        </div>
        <div className="contact-info-item">
            <i><BsTelephone /></i>
           <div className="column">
                <h1>Lets Talk</h1>
                <p className="purple">+1 800 1236879</p>
           </div>
        </div>
        <div className="contact-info-item">
            <i><AiOutlineMail /></i>
           <div className="column">
                <h1>Sale Support</h1>
                <p className="purple">contact@example.com</p>
           </div>
        </div>
    </div>
  )
}

export default ContactInfo