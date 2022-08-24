import "./BaseSelect.scss"

const BaseSelect = ({ options }) => {
  return (
    <select className="base-select">
        {
            options.map(item => {
                const { id, text } = item;
                return <option key={ id }>{ text && text }</option>
            })
        }
    </select>
  )
}

export default BaseSelect