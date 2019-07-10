import React from 'react'
import { Grid, Container, Card, Statistic, Icon } from 'semantic-ui-react'

const foodDetails = {
  'name': 'Turkey',
  'category': 'meat',
  'carbon_output': 403,
  'water_usage': 52
}

function FoodDetails ({ foodId }) {
  return (
    <Grid>
      <Container>
        <Card centered>
          <Card.Content>
            <Card.Header>
              {foodDetails.name}
            </Card.Header>
            <Card.Meta hidden>
              {foodId}
            </Card.Meta>
            <Card.Description>
              <Grid columns={2} divided>
                <Grid.Column>
                  <Statistic>
                    <Icon color='grey' name='cloud' size='huge'/>
                    <Statistic.Value>
                      {foodDetails.carbon_output}
                    </Statistic.Value>
                    <Statistic.Label>
                      Carbon Output
                    </Statistic.Label>
                  </Statistic>
                </Grid.Column>
                <Grid.Column>
                  <Statistic>
                    <Icon color="blue" name='tint' size='huge'/>
                    <Statistic.Value>
                      {foodDetails.water_usage}
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
            Category: {foodDetails.category}
          </Card.Content>
        </Card>
      </Container>
    </Grid>
  )
}

export default FoodDetails
