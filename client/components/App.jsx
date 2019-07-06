import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'

export default function App () {
  return (
    <>
      <Route path='/' component={TopMenu} />
      <Container style={{ marginTop: 75 }}>
        <Switch>
          <Route exact path='/' component={FoodList} />
        </Switch>
      </Container>
    </>
  )
}
