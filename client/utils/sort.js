export function sortAZ (arr) {
  return arr.sort((a, b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0
  })
}

export function sortHighLowWater (arr) {
  return arr.sort((a, b) => {
    if (a.waterUsage < b.waterUsage) return -1
    else if (a.waterUsage > b.waterUsage) return 1
    else return 0
  })
}

export function sortLowHighWater (arr) {
  return arr.sort((a, b) => {
    if (a.waterUsage > b.waterUsage) return -1
    else if (a.waterUsage < b.waterUsage) return 1
    else return 0
  })
}
