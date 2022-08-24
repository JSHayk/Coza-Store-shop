import "./BaseButton.scss"

const BaseButton = ({ text, func }) => {
  return <button type="button" onClick={func && func} className="base-button" >{ text && text }</button>
}

export default BaseButton