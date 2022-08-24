import "./BaseTitleImage.scss"

const BaseTitleImage = ({ title, image }) => {
  return (
    <div style={{backgroundImage: `url(${ image })`}} className='base-title-image'>
        { title && title }
    </div>
  )
}

export default BaseTitleImage