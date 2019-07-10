import React from 'react'
import { Grid, Container, Card, Divider, Statistic, GridColumn } from 'semantic-ui-react'

const foodDetails = {
  'name': 'Turkey',
  'category': 'meat',
  'carbon_output': 403,
  'water_usage': 52
}

function FoodDetails () {
  return (
    <Grid>
      <Container>
        <Card>
          <Card.Content>
            <Card.Header>
              {foodDetails.name}
            </Card.Header>
            <Card.Description>
              <Grid>
                <Grid.Column>
                  <Statistic>
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
                    <Statistic.Value>
                      {foodDetails.water_usage}
                    </Statistic.Value>
                    <Statistic.Label>
                      Water Usage
                    </Statistic.Label>
                  </Statistic>
                </Grid.Column>
              </Grid>
              <Divider vertical></Divider>
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
