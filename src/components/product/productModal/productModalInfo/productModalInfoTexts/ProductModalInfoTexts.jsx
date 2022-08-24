import React from 'react'

const ProductModalInfoTexts = ({ modelName, price, descr }) => {
  return (
    <>
        <h1 className="product-modal-container-info-model-name">{ modelName && modelName }</h1>
        <h3 className="product-modal-container-info-price">{ price && price }</h3>
        <p className="product-modal-container-info-descr">{ descr && descr }</p>
    </>
  )
}

export default ProductModalInfoTexts