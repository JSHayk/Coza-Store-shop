import { useEffect, useState } from "react"
import "./ContactForm.scss"
import BaseInput from "../../common/baseInput/BaseInput"
import { AiOutlineMail } from "react-icons/ai"
import BaseTextArea from "../../common/baseTextArea/BaseTextArea"
import BaseButton from "../../common/baseButton/BaseButton"
import axios from "axios"

const ContactForm = () => {
  const deafultReqData = {
    email: "",
    textarea: ""
  }
  const [reqData, setReqData] = useState(deafultReqData);
  const [val, setVal] = useState(["", ""]);

  const changeValue = (val, name) => {
    setReqData(prev => {
      return {
        ...prev,
        [name]: val
      }
    })
  }

  useEffect(() => {
    const [firstVal, secondVal] = val;
    if (secondVal) {
      changeValue(firstVal, secondVal);
    }
  }, [val]);

  const sendReq = () => {
    const checkData = Object.entries(reqData).every(item => item[1].trim());
    if (!checkData) return
    else {
      axios.post('https://jsonplaceholder.typicode.com/posts', reqData);
      setReqData(deafultReqData);
    }
  }

  return (
    <form className='contact-form'>
        <h1 className="contact-form-title">Send Us A Message</h1>    
        <BaseInput type="text" plc="Your email address" Icon={ AiOutlineMail } reqData={ reqData } setVal={ setVal } name="email" />
        <BaseTextArea plc="How Can We Help?"  reqData={ reqData } setVal={ setVal } name="textarea" />
        <BaseButton text="SUBMIT" func={ sendReq } />
    </form>
  )
}

export default ContactForm