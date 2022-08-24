import { useContext } from 'react'
import { ProductContext } from '../../Product'
import "./ProductTypes.scss"

const ProductTypes = () => {
  const { productTypesData, sortItems, onChangeActive } = useContext(ProductContext);
    return (
        <div className='product-types'>
            {
                productTypesData.map(item => {
                    const { text, isActive, id } = item;
                    return <h4 key={ id } onClick={() => {
                        sortItems(text.toLowerCase())
                        onChangeActive(id);
                    }} className={`product-types-item ${ isActive ? "active" : ""}`}>{ text }</h4>
                })
            }
        </div>
    )
}

export default ProductTypes