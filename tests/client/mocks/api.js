jest.mock('../../../client/api/api', () => {
  return new Promise((resolve, reject) => {
    return Promise.resolve({body: 'Post OK'})
  })
})
