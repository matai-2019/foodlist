import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import NoMatch from './NoMatch'
import FoodDetails from './FoodDetails'

export default function App () {
  return (
    <Router>
      <>
        <Route path="/" component={TopMenu} />
        <Container style={{ paddingTop: 75 }}>
          <Switch>
            <Route exact path="/" component={FoodList} />
            <Route path="/details/:foodId" component={FoodDetails} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </>
    </Router>
  )
}
