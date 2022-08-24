import { FaExpandAlt } from "react-icons/fa" 

const ProductModalBig = ({ image }) => {
  const { src, alt } = image;
    return (
        <div className="product-modal-container-images-big">
            <img src={ src && src } alt={ alt && src } />
            <div className="product-modal-container-images-big-expand">
                <FaExpandAlt />
            </div>
        </div>
    )
}

export default ProductModalBig