import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleMessage = ({ message }) => (
  <Message>
    <Message.Header>Error</Message.Header>

    <p>
      { message }
    </p>
  </Message>
)

export default MessageExampleMessage
