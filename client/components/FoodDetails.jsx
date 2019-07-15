import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Card, Statistic, Icon, Button } from 'semantic-ui-react'
<<<<<<< HEAD
<<<<<<< HEAD
import { getFood } from '../actions/foodDetails'
import { deleteFood } from '../api/api'
=======
>>>>>>> 665d69c2e16752ec0d46ddd3966574b7b5ebb9c8
=======
>>>>>>> f55f27b41cbc15c6d030537243b2e2a5c7a29de9
import { Link } from 'react-router-dom'

import { getFood } from '../actions/foodDetails'

class FoodDetails extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.foodId
    this.props.getFood(id)
  }

  render () {
    const { foodDetails, info: { pending, error } } = this.props
    return pending ? (<div>LOADING...</div>)
      : (<>
      {error && <div>{error}</div> }
        <div>
          <Container className='food-details'>
            <Card centered>
              <Card.Content>
                <Card.Header as='h2'>
                  {foodDetails && foodDetails.name}
                </Card.Header>
                <Card.Description>
                  <Grid columns={2} divided>
                    <Grid.Column>
                      <Icon color='grey' name='cloud' size='huge' />
                      <Statistic size='small'>
                        <Statistic.Value>
                          {foodDetails && foodDetails.carbon_output}
                        </Statistic.Value>
                        <Statistic.Label color='grey'>
                        Carbon Output
                        </Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon color="blue" name='tint' size='huge' />
                      <Statistic size='small'>
                        <Statistic.Value>
                          {foodDetails && foodDetails.water_usage}
                        </Statistic.Value>
                        <Statistic.Label color='grey'>
                        Water Usage
                        </Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                  </Grid>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              Category: {foodDetails && foodDetails.category}
              </Card.Content>
            </Card>
          </Container>
        </div>
        <Button><Link to={`/edit/${this.props.match.params.foodId}`}>Edit Food</Link></Button>
      </>)
  }
}

const mapStateToProps = state => {
  return {
    info: state.info,
    foodDetails: state.foodDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFood: (id) => dispatch(getFood(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
