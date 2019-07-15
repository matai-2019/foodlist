import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Label from './Label';

export default function Food ({ food: { name, id , carbonOutput, waterUsage} }) {
  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>
              <Link to={`/details/${id}`}>
                {name}
              </Link>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>
                <Label value={carbonOutput} type="carbon" />
                <Label value={waterUsage} type="water" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      </Table>
    </>
  )
}
