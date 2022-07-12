const by = (element, data) => {
  if (data == undefined)
    return null

  const raw = data
    .map(data => data[element])
    .reduce((count, unique) => (
      count[unique] = count[unique] + 1 || 1, count
    ), {})

  const result = []
  for (const [element, count] of Object.entries(raw)) {
    result.push({ element, count })
  }
  
  return result  
}

export default { by }