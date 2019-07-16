import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleMessage = ({ message }) => (
  <Message negative style={{ marginTop: '75px', }}>
    <Message.Header >
      <i className="ambulance icon "></i>Error
    </Message.Header>
    <p>
      { message || 'unknown error, sorry for the inconvenience'}
    </p>
  </Message>
)

export default MessageExampleMessage
