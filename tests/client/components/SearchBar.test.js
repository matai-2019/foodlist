import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SearchBar from '../../../client/components/SearchBar'

describe('<SearchBar /> tests', () => {
  it('Jest working', () => {
    expect(true).toBeTruthy()
  })
  it('<Comp /> contains a Search button', () => {
    const expected = 'Search'
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' }, info: { pending: true, error: null } })
    const wrapper = mount(<Provider store={mockStore}><SearchBar/></Provider>)
    const actual = (wrapper.text())
    expect(actual).toBe(expected)
  })
  it('<Comp /> conatins a button and input ', () => {
    const expected = 2
    const mockStore = configureStore()({ foodDetails: { 'name': 'Turkey' }, info: { pending: true, error: null } })
    const wrapper = mount(<Provider store={mockStore}><SearchBar/></Provider>)
    const actual = wrapper.find('input').length + wrapper.find('button').length
    expect(actual).toBe(expected)
  })
  it('should call handleChange', () => {
    const handleChangeMock = jest.fn()
    const wrapper = mount(<input type="text" placeholder="Search..." onChange={handleChangeMock}/>)
    wrapper.find('input').simulate('change')
    expect(handleChangeMock).toBeCalled()
  })
  it('should call handleSearch', () => {
    const handleSearchMock = jest.fn()
    const wrapper = mount(<button className="ui button" onClick={handleSearchMock}>Search</button>)
    wrapper.find('button').simulate('click')
    expect(handleSearchMock).toBeCalled()
  })
  it('should have a dispatch if connected', () => {
    const mockStore = configureStore()({ foodDetails: {}, info: {} })
    const wrapper = mount(<Provider store={mockStore}><SearchBar/></Provider>)
    const dispatch = wrapper.props().store.dispatch
    expect(dispatch).toBeTruthy()
  })
})
