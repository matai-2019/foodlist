import React from 'react'
import { Loader } from 'semantic-ui-react';

const WaitIndicator = ({message}) => {
  const setWaitMessage = () => {
    if(message){
      return message
    }else{
      return 'Loading'
    }
  }

  return (
      <Loader size='large' active>
        {setWaitMessage()}
      </Loader>
  )
}

export default WaitIndicator
