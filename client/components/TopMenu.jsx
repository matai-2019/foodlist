import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

export default function TopMenu () {
  return (
    <Menu borderless color='grey' fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          <Header as='h1' inverted>The Food List</Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
      </Container>
    </Menu>
  )
}
