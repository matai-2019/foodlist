export default function sortHighLowWater (arr) {
  return arr.sort((a, b) => {
    if (a.waterUsage < b.waterUsage) return -1
    else if (a.waterUsage > b.waterUsage) return 1
    else return 0
  })
}
