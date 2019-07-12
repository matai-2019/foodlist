export function addFood () {
  return Promise.resolve({ id: 1 })
}

export function editFood () {
  return Promise.resolve({ body: 'Put ok!' })
}

export function deleteFood () {
  return Promise.resolve({ Okay: true })
}
