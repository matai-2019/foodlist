import React from 'react'
import { Loader } from 'semantic-ui-react'

const WaitIndicator = ({ message }) => {
  return (
    <Loader size='large' active>
      {message || 'Loading'}
    </Loader>
  )
}

export default WaitIndicator
