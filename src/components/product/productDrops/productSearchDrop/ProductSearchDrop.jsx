import "./ProductSearchDrop.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../Product"

const ProductSearchDrop = () => {
  const { searchItems } = useContext(ProductContext);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    searchItems(searchVal);
  }, [searchVal, searchItems]);

    return (
      <div className='product-search-drop-container'>
          <div className='product-search-drop'>
              <i><AiOutlineSearch /></i>
              <input onChange={e => setSearchVal(e.target.value)} value={ searchVal } type="text" placeholder="Search" />
          </div>
      </div>
    )
}

export default ProductSearchDrop