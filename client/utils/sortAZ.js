
function sortObjects (a, b) {
  if (a.name < b.name) { return -1 }
  else if (a.name > b.name) { return 1 }
  else return 0
}

export default function sortAZ (arr) {
  return arr.sort(sortObjects)
}