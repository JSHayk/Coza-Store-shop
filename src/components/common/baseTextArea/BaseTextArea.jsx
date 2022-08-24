import "./BaseTextArea.scss"

const BaseTextArea = ({ plc, reqData, setVal, name  }) => {
  return <textarea value={ reqData[name] } onChange={e => setVal([e.target.value, name])} className="base-textarea" placeholder={ plc && plc}></textarea>
}

export default BaseTextArea