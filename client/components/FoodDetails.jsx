import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Card, Statistic, Icon, Button, Menu } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

import { getFood } from '../actions/foodDetails'
import { deleteFood } from '../api/api'
import { deleteFoodError } from '../actions/updateFoodErrors'

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
        this.props.deleteFoodError(err.message)
      })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }

    const { foodDetails } = this.props
    return (
      <>
        <div>
          <Container className='food-details'>
            <Card centered>
              <Menu icon borderless attached="top">
                <Card.Header style={{ paddingLeft: '1em', margin: '0', display: 'flex', alignItems: 'center' }} as="h2">
                  {foodDetails && foodDetails.name}
                </Card.Header>
                <Menu.Item
                  as={Link}
                  to={`/edit/${this.props.match.params.foodId}`}
                  position="right"
                  link
                >
                  <Icon name="pencil"/>
                </Menu.Item>
                <Menu.Item
                  onClick={this.handleDelete}
                >
                  <Icon name="trash" />
                </Menu.Item>
              </Menu>
              <Card.Content>
                <Card.Description>
                  <Grid columns={2} divided>
                    <Grid.Column>
                      <Icon color='grey' name='cloud' size='huge' style={{ display: 'flex', justifySelf: 'center' }}/>
                      <Statistic size='small'>
                        <Statistic.Value>
                          {foodDetails && foodDetails.carbonOutput}
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
                          {foodDetails && foodDetails.waterUsage}
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
      </>)
  }
}

const mapStateToProps = state => {
  return {
    foodDetails: state.foodDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFood: (id) => dispatch(getFood(id)),
    deleteFoodError: (message) => dispatch(deleteFoodError(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
