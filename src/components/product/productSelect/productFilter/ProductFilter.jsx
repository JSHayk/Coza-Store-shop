import "./ProductFilter.scss"
import { IoFilterOutline } from "react-icons/io5"
import BaseSelectButton from "../../../common/BaseSelectMenu/BaseSelectMenu"

const ProductFilter = () => {
  return (
    <div className='product-filter'>
      <BaseSelectButton Icon={ IoFilterOutline } text="Filter" />
    </div>
  )
}

export default ProductFilter