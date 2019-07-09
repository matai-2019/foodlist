import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu, Input } from 'semantic-ui-react'

export default function TopMenu () {
  return (
    <Menu borderless color='grey' fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          <Header as='h1' inverted>The Food List</Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
        <Menu.Item as={Link} to='/'>A-Z</Menu.Item>
        <Menu.Item as={Link} to='/'>CO2</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
