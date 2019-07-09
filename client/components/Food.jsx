import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Food ({ food: { name } }) {
  return (
    <>
<Table singleLine style={{ width: '20vw' }}>
  <Table.Header>
    <Table.Row >
      <Table.HeaderCell> <Link to='#'>{name}</Link></Table.HeaderCell>
    </Table.Row>
  </Table.Header>
</Table>

    </>
  )
}
