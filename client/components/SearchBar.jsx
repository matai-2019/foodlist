import React from 'react'
import { Input } from 'semantic-ui-react'

export default function SearchBar () {
  return (
    <>
      < Input className="ui action input">
        <input type="text" placeholder="Search..."/>
        <button className="ui button">Search</button>
      </Input>
    </>
  )
}
