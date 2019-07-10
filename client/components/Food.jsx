import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Food ({ food: { name } }) {
  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>{name}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </>
  )
}
