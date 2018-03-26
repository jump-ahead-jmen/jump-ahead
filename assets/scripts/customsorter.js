function compare (a, b) {
  const nameA = a.name
  const nameB = b.name

  let comparison = 0
  if (nameA > nameB) {
    comparison = 1
  } else if (nameA < nameB) {
    comparison = -1
  }
  return comparison
}

module.exports = compare
