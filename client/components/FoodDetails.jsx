import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Card, Statistic, Icon } from 'semantic-ui-react'
// import { getFoodDetails } from '../actions'

class FoodDetails extends React.Component {
  render () {
    return (
      <div>
        <Container className='food-details'>
          <Card centered>
            <Card.Content>
              <Card.Header>
                {this.props.foodDetails.name}
              </Card.Header>
              <Card.Description>
                <Grid columns={2} divided>
                  <Grid.Column>
                    <Statistic>
                      <Icon color='grey' name='cloud' size='huge' />
                      <Statistic.Value>
                        {this.props.foodDetails.carbon_output}
                      </Statistic.Value>
                      <Statistic.Label>
                        Carbon Output
                      </Statistic.Label>
                    </Statistic>
                  </Grid.Column>
                  <Grid.Column>
                    <Statistic>
                      <Icon color="blue" name='tint' size='huge' />
                      <Statistic.Value>
                        {this.props.foodDetails.water_usage}
                      </Statistic.Value>
                      <Statistic.Label>
                        Water Usage
                      </Statistic.Label>
                    </Statistic>
                  </Grid.Column>
                </Grid>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Category: {this.props.foodDetails.category}
            </Card.Content>
          </Card>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodDetails: state.foodDetails
  }
}

export default connect(mapStateToProps)(FoodDetails)
