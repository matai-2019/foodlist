import React from 'react'
import { Label as Tag, Icon } from 'semantic-ui-react'

import { getWaterLevel, getCarbonLevel } from '../utils/getLevel'

export default function Label ({ value, type }) {
  const label = () => {
    if (type === 'water') {
      return getWaterLevel(value)
    } else if (type === 'carbon') {
      return getCarbonLevel(value)
    }
  }

  return (
    <Tag className={label().color} basic size='mini'>
      {type === 'water'
      ? <Icon name='tint'/> 
      : <Icon name='cloud'/>}
      {label().name}
    </Tag>
  )
}
