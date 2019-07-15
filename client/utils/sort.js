export function sortAlphabeticalAscending (arr) {
  return arr.sort((a, b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0
  })
}

export function sortWaterUsageDescending (arr) {
  return arr.sort((a, b) => {
    if (a.waterUsage > b.waterUsage) return -1
    else if (a.waterUsage < b.waterUsage) return 1
    else return 0
  })
}

export function sortCarbonDescending (arr) {
  return arr.sort((a, b) => {
    if (a.carbon_output > b.carbon_output) return -1
    else if (a.carbon_output < b.carbon_output) return 1
    else return 0
  })
}

export function sortWaterUsageAscending (arr) {
  return arr.sort((a, b) => {
    if (a.waterUsage > b.waterUsage) return -1
    else if (a.waterUsage < b.waterUsage) return 1
    else return 0
  })
}
