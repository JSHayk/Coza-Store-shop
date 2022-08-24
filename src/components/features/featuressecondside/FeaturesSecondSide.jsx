import React from 'react'
import BaseButton from '../../common/baseButton/BaseButton'

const FeaturesSecondSide = () => {
  return (
    <section className='features-wrapper-second-side'>
        <div className='card-totals'> 
            <h1>CART TOTALS</h1>
            <div className="card-totals-subtotal mt-mb">
              <p className='mt-mb'>Subtotal:</p>
              <p className='ml-features'>$79.65</p>
            </div>
            <div className="card-totals-shipping">
              <p>Shipping:</p>
              <div className="card-totals-shipping-desc  ml-features">
                <p> There are no shipping methods available. Please double check your address, or contact us if you need any help.</p>
                <p className='mt-mb'>CALCULATE SHIPPING</p>
                <div className='card-totals-shipping-desc-select-container'>
                  <select name="country" >
                    <option value="select">Select a country...</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
                <input type="text"placeholder='State/ country'className='input-features'/>
                <input type="text"placeholder='Postcode/ Zip' className='input-features' />
                <BaseButton text={"UPDATE TOTALS"}/>
              </div>
            </div>
            <div className="card-totals-total mt-mb">
              <h4>Total:</h4>
              <p className=' ml-50'>$79.65</p>
            </div>
            <BaseButton text={"PROCEED TO CHECKOUT"} />
        </div>
    </section>
  )
}

export default FeaturesSecondSide