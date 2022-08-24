import React from 'react'

const ProductModalSmall = ({ imageData, setCurrentImage }) => {
  const { image1, image2, image3 } = imageData;
    return (
        <div className="product-modal-container-images-small">
            <div onClick={() => setCurrentImage('image1')} className='product-modal-container-images-small-item'>
                <img src={ image1 } alt="ok" />
            </div>
            <div onClick={() => setCurrentImage('image2')}  className='product-modal-container-images-small-item'>
                <img src={ image2 } alt="ok" />
            </div>
            <div onClick={() => setCurrentImage('image3')}  className='product-modal-container-images-small-item'>
                <img src={ image3 } alt="ok" />
            </div>
        </div> 
    )
}

export default ProductModalSmall