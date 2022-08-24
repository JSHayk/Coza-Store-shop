import React, { useState } from 'react'
import BaseSelect from '../../../../common/baseSelect/BaseSelect'

const ProductModalInfoSelects = () => {
  const [sizeOptions, setSizeOptions] = useState([
    {
        id: 1,
        text: "Choose Option",
    },
    {
        id: 2,
        text: "Size S",
    },
    {
        id: 3,
        text: "Size M",
    },
    {
        id: 4,
        text: "Size L",
    },
    {
        id: 5,
        text: "Size XL",
    }
  ])
  const [colorOptions, setColorOptions] = useState([
    {
        id: 1,
        text: "Choose Option",
    },
    {
        id: 2,
        text: "Red",
    },
    {
        id: 3,
        text: "Blue",
    },
    {
        id: 4,
        text: "White",
    },
    {
        id: 5,
        text: "Gray",
    }
  ])
    return (
        <div className="product-modal-container-info-selects">
            <div className="product-modal-container-info-selects-item">
                <p>Size</p>
                <div>
                   <BaseSelect options={ sizeOptions } />
                </div>
            </div>
            <div className="product-modal-container-info-selects-item">
                <p>Color</p>
                <div>
                   <BaseSelect options={ colorOptions } />
                </div>
            </div>
        </div>
    )
}

export default ProductModalInfoSelects