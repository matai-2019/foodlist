export function addFood () {
  return Promise.resolve({ id: 1 })
}

export function editFood () {
  return Promise.resolve({
    id: 5,
    name: 'black',
    category: 'Fish',
    carbon_output: 5.26,
    water_usage: null
  })
}

export function deleteFood () {
  return Promise.resolve({ Okay: true })
}
