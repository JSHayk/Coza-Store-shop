import { useContext } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import BaseSelectMenu from "../../../common/BaseSelectMenu/BaseSelectMenu"
import { ProductContext } from "../../Product"
import "./ProductSearch.scss"

const ProductSearch = () => {
  const { setIsSearchDropOpen, isSearchDropOpen } = useContext(ProductContext);
    return (
      <div className='product-search'>
        <BaseSelectMenu styles={ isSearchDropOpen ? {backgroundColor: "#e6e6e6"} : {} } Icon={ isSearchDropOpen ? IoClose : AiOutlineSearch } text="Search" dropFunc={ () => setIsSearchDropOpen(prev => !prev) } />
      </div>
    )
}

export default ProductSearch