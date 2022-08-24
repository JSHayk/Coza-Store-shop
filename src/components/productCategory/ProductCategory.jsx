import "./ProductCategory.scss";
import ProductCategoryItem from "./productCategoryItem/ProductCategoryItem";

const ProductCategory = ({ productCategoryData }) => {
    return (
        <div className="product-category">
            {
                productCategoryData.map(item => {
                    return <ProductCategoryItem key={ item.id } item={ item } />
                })
            }
        </div>
    )
}

export default ProductCategory;