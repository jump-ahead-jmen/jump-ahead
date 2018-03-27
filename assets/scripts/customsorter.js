function compare (a, b) {
  const organizationA = a.organization.toLowerCase()
  const organizationB = b.organization.toLowerCase()

  let comparison = 0
  if (organizationA > organizationB) {
    comparison = 1
  } else if (organizationA < organizationB) {
    comparison = -1
  }
  return comparison
}

module.exports = compare
