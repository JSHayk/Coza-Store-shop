import { useContext } from "react"
import { ProductContext } from "../Product"
import ProductItem from "./productItem/ProductItem";
import "./ProductItems.scss"

const ProductItems = () => {
  const { productItemsData, setModalData, setIsModalOpen, likedItem } = useContext(ProductContext);
    return (
        <div className="product-items">
            {
                productItemsData.map(item => {
                    return <ProductItem key={ item.id } item={ item } setModalData={ setModalData } setIsModalOpen={ setIsModalOpen } likedItem={ likedItem } />
                })
            }
        </div>
    )
}

export default ProductItems