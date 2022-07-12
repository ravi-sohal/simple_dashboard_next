const by = (elements, data) => {
  const group = []

  data.map(d => {
    const unique = elements.map(e => d[e])

    if (!group[unique.join('')])
      group[unique.join('')] = []

    group[unique.join('')].push({...d})
  })

  return group
}

export default { by }