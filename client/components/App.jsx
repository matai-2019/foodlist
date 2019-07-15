import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import NoMatch from './NoMatch'
import AddFood from './AddFood'
import FoodDetails from './FoodDetails'
import EditFood from './EditFood'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'
function App({ info, info: { error } }) {
  return (
    <Router>
      <>
        <Route path="/" render={props =>
          <>
            <TopMenu />
            {
              true && <ErrorMessage message={error} />
            }
          </>
        } />
        {info.pending && <WaitIndicator />}
        <Container style={{ paddingTop: 75 }}>
          <Switch>
            <Route exact path="/" component={FoodList} />
            <Route path="/category/:name" component={FoodList} />
            <Route path="/new" component={AddFood} />
            <Route path="/details/:foodId" component={FoodDetails} />
            <Route path="/edit/:foodId" component={EditFood} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </>
    </Router>
  )
}

const mapStateToProps = ({ info }) => {
  return {
    info
  }
}

export default connect(mapStateToProps)(App)
