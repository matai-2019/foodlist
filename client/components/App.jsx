import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'

export default function App () {
  return (
    <Router>
      <>
        <Route path='/' component={TopMenu} />
        <Container style={{ marginTop: 75 }}>
          <Switch>
            <Route exact path='/' component={FoodList} />
          </Switch>
        </Container>
      </>
    </Router>
  )
}
