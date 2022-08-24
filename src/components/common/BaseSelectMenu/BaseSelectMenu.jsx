import "./BaseSelectMenu.scss"

function BaseSelectButton({ Icon, text, dropFunc, styles }) {
  return (
    <div style={ styles } onClick={dropFunc} className='base-select-menu'>
        { Icon && <i><Icon /></i> }
        <p>{ text && text }</p>
    </div>
  )
}

export default BaseSelectButton