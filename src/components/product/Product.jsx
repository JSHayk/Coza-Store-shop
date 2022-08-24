import "./Product.scss"
import { createContext, useState, memo, useCallback } from 'react'
import ProductSelect from './productSelect/ProductSelect'
import ProductItems from './productItems/ProductItems';
import ProductModal from "./productModal/ProductModal";
import BaseButton from "../common/baseButton/BaseButton";
import { Link } from "react-router-dom"
import ProductSearchDrop from "./productDrops/productSearchDrop/ProductSearchDrop";

export const ProductContext = createContext();

const Product = memo(({ productData, productTitle, distanceStyle }) => {
  const [itemsData, setItemsData] = useState(productData.items);
  const [typesData, setTypesData] = useState(productData.types);
  const [modalData, setModalData] = useState({
    imageData: null,
    textData: null
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchDropOpen, setIsSearchDropOpen] = useState(false);
  const [currentType, setCurrentType] = useState("all products");

  const getCurrentTypeData = useCallback((checkItem) => {
    return productData.items.filter(item => {
        if (checkItem === "all products") {
            return productData.types;
        } else {
            return item.type === checkItem;
        }
    })
  }, [productData]);

  const sortItems = useCallback((type) => {
    setCurrentType(type);
    setItemsData(() => {
        return getCurrentTypeData(type)
    });
  }, [getCurrentTypeData]);

  const onChangeActive = useCallback((id) => {
    setTypesData(() => {
        return productData.types.map(item => {
            if (item.id === id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }

            return item;
        })
    })
  }, [productData]);


  const searchItems = useCallback((searchedText) => {
    setItemsData(() => {
        const itemsData = getCurrentTypeData(currentType);
        return itemsData.filter(item => item.modelName.toLowerCase().includes(searchedText.toLowerCase()));
    })
  }, [currentType, getCurrentTypeData]);

  const likedItem = useCallback((id) => {
    setItemsData(prev => {
        return prev.filter(item => {
            if (item.id === id) {
                return item.isLiked = true
            } else {
                return item;
            }
        })
    })
  }, []);

    return (
        <ProductContext.Provider value={{ productItemsData: itemsData, productTypesData: typesData, sortItems, onChangeActive, setModalData, setIsModalOpen, setIsSearchDropOpen, isSearchDropOpen, searchItems, likedItem }}>
            <div style={distanceStyle && distanceStyle} className='product'>
                <h1 className='product-title'>{ productTitle && productTitle }</h1>
                <ProductSelect />
                { isSearchDropOpen && <ProductSearchDrop /> }
                <ProductItems />
                <Link to="/Shop"><BaseButton text="Load More" /></Link>
                { isModalOpen ? <ProductModal modalData={ modalData } setIsModalOpen={ setIsModalOpen } /> : undefined}
            </div>
        </ProductContext.Provider>
    )
})

export default Product