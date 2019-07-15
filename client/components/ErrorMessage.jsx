import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleMessage = ({ message }) => (
  <Message>
    <Message.Header style={{ color: 'red' }}>
      <i className="ambulance icon"></i>Error
    </Message.Header>
    <p>
      { message }
    </p>
  </Message>
)

export default MessageExampleMessage
