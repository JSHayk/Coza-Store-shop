import React from 'react'
import {Link} from 'react-router-dom'
import BaseCounter from '../../common/baseCounter/BaseCounter'
import { IoClose } from 'react-icons/io5'
import BaseButton from '../../common/baseButton/BaseButton'

const FeaturesFirstSide = () => {
  return (
    <section className='features-wrapper-first-side'>
      <p className='features-wrapper-first-side-title'><Link to={"/Home"} className="home-link">Home</Link>{" > "} Shoping Cart</p>
      <table className='features-wrapper-first-side-table' >
        <thead>
          <tr >
            <th className='pr-100'>PRODUCT</th>
            <th className='pr'>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='image-td'>
              <div className='image-td-item features-img1'>
                <div className="image-td-item-color">
                  <IoClose/>
                </div>
              </div>
              <p>Fresh Strawberries</p>
            </td>
            <td>
              <p>	$ 36.00</p>
            </td>
            <td>
            <BaseCounter/>
            </td>
            <td className='pr'>
              <p>$ 36.00</p>
            </td>
          </tr>
          <tr>
            <td className='image-td'>
              <div className='image-td-item features-img2'>
                <div className="image-td-item-color">
                  <IoClose/>
                </div>
              </div>
              <p>Lightweight Jacket</p>
            </td>
            <td>
              <p>$ 16.00</p>
            </td>
            <td>  
              <BaseCounter/>
            </td>
            <td>
              <p>$ 16.00</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='features-wrapper-first-side-table-functional'>
        <input type="text" placeholder='Coupon Code'/>
        <BaseButton text={"APPLY COUPON"} />
        <BaseButton text={"UPDATE CARD"}/>
      </div>
    </section>
  )
}

export default FeaturesFirstSide