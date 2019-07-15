import React from 'react'
import { Label as Tag } from 'semantic-ui-react'

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
    <Tag color={label().color} tag>
      {label().name}
    </Tag>
  )
}
