function compare (a, b) {
  const postA = a.createdAt
  const postB = b.createdAt

  let comparison = 0
  if (postA > postB) {
    comparison = 1
  } else if (postA < postB) {
    comparison = -1
  }
  return comparison
}

module.exports = compare
