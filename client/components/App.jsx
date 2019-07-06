import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'

class App extends React.Component {
  render () {
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
}

export default App

