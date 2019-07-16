import React from 'react'
import { Table } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Label from './Label';

class Food extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: null
    }
  }

  handleClick = id => {
    return () => {
      this.setState({ redirect: Number(id) })
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to={`/details/${this.state.redirect}`} />
    }
  }

  render() {
    const { id, name, carbonOutput, waterUsage } = this.props.food
    return (
      <>
        {this.renderRedirect()}
        < Table singleLine onClick={this.handleClick(id)} >
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell>
                {name}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>
              <Label value={carbonOutput} type="carbon" />
              <Label value={waterUsage} type="water" />
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      </Table >
      </>
    )
  }

}

export default Food