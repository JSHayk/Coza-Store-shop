import React from 'react'
import './Features.scss'
import FeaturesFirstSide from '../../components/features/featuresfirstside/FeaturesFirstSide'
import FeaturesSecondSide from '../../components/features/featuressecondside/FeaturesSecondSide'

const Features = () => {
  return (
    <div className='features-wrapper'>
        <FeaturesFirstSide/>
        <FeaturesSecondSide/>
    </div>
  )
}

export default Features