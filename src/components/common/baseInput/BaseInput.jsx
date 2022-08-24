import "./BaseInput.scss"

const BaseInput = ({ type, plc, Icon, reqData, setVal, name }) => {
  return (
    <div className='base-input'>
        { Icon && <i><Icon /></i> }
        <input value={ reqData[name] } onChange={e => setVal([e.target.value, name]) } type={ type && type } placeholder={ plc && plc } />
    </div>
  )
}

export default BaseInput