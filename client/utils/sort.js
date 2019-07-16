export function sortAlphabeticalAscending (arr) {
  arr.sort((a, b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortWaterUsageDescending (arr) {
  arr.sort((a, b) => {
    if (a.waterUsage > b.waterUsage) return -1
    else if (a.waterUsage < b.waterUsage) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortCarbonDescending (arr) {
  arr.sort((a, b) => {
    if (a.carbon_output > b.carbon_output) return -1
    else if (a.carbon_output < b.carbon_output) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortWaterUsageAscending (arr) {
  arr.sort((a, b) => {
    if (a.waterUsage < b.waterUsage) return -1
    else if (a.waterUsage > b.waterUsage) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortCarbonAscending (arr) {
  arr.sort((a, b) => {
    if (a.carbon_output < b.carbon_output) return -1
    else if (a.carbon_output > b.carbon_output) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function searchFood (arr, searchTerm) {
  return arr.filter(element => {
    return element.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}
