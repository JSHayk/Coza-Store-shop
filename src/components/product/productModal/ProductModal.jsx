import "./ProductModal.scss";
import ProductModalBig from "./productModalImages/productModalBig/ProductModalBig";
import ProductModalSmall from "./productModalImages/productModalSmall/ProductModalSmall";
import ProductModalInfoTexts from "./productModalInfo/productModalInfoTexts/ProductModalInfoTexts";
import ProductModalInfoSelects from "./productModalInfo/productModalInfoSelects/ProductModalInfoSelects";
import BaseCounter from "../../common/baseCounter/BaseCounter";
import BaseButton from "../../common/baseButton/BaseButton";
// Import Links icons
import { AiFillHeart } from "react-icons/ai"
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri"
import { FaGooglePlusG } from "react-icons/fa"
import { TbMinusVertical } from "react-icons/tb"
import { IoClose } from 'react-icons/io5'
import { useState, useEffect } from "react";

const ProductModal = ({ modalData, setIsModalOpen }) => {
  const [currentImage, setCurrentImage] = useState('image1');
  const defaultDescr = "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
  const { imageData, textData } = modalData;
  const { price, modelName } = textData;

  useEffect(() => {
    const closeModal = (e) => {
        if (e.key === "Escape") {
            setIsModalOpen(false);
        }
    }
    window.addEventListener("keydown", closeModal);    
    
    return () => {
        window.removeEventListener("keydown", closeModal)
    }
  });

    return (
        <div className="product-modal">
            <div className="product-modal-container">
                <div className="product-modal-container-images">
                    <ProductModalSmall imageData={ imageData } setCurrentImage={ setCurrentImage }/>
                    <ProductModalBig image={ { src: imageData[currentImage], alt: "Shirts" } }/>
                </div>
                <div className="product-modal-container-info">
                    <ProductModalInfoTexts modelName={ modelName } price={ price } descr={ defaultDescr } />
                    <ProductModalInfoSelects />
                    <div className="product-modal-container-buy">
                        <BaseCounter />
                        <BaseButton text="Add to Card" />
                    </div>
                    <div className="product-modal-container-links">
                        <i><AiFillHeart /></i>
                        <i style={{fontSize: "18px", color: "#e6e6e6"}}><TbMinusVertical /></i>
                        <i><RiFacebookFill /></i>
                        <i><RiTwitterFill /></i>
                        <i><FaGooglePlusG /></i>
                    </div>
                </div>
                <div onClick={() => setIsModalOpen(false)} className="product-modal-container-close">
                    <IoClose />
                </div>
            </div>
        </div>
    )
}

export default ProductModal