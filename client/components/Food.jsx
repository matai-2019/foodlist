import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Food ({ food: { name, id } }) {
  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell><Link to={'/details/' + id }>{name}</Link></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </>
  )
}
