import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Card, Statistic, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getFood } from '../actions/foodDetails'
import { deleteFood } from '../api/api'

class FoodDetails extends React.Component {
  state = {
    id: null
  }

  componentDidMount () {
    const id = Number(this.props.match.params.foodId)

    this.setState({ id })
    this.props.getFood(id)
  }

  handleDelete = (e) => {
    deleteFood(this.state.id)
      .then(() => this.setState({
        redirect: true
      }))
      .catch(err => {
        throw new Error(err.message)
      })
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
        <Button>
          <Link to={`/edit/${this.props.match.params.foodId}`}>Edit Food</Link>
        </Button>
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
