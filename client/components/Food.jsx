import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Food ({ food: { name } }) {
  return (
    <>
     <Grid reversed='mobile vertically'>
       <Grid.Row>
         <Link to='#'><Grid.Column>{name}</Grid.Column></Link>
       </Grid.Row>
     </Grid>
    </>
  )
}
