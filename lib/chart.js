const config = (data, x, y, f) => ({
  data: data.map(data => ({
      x: data[x],
      y: data[y],
      f: data[f]
  })),
  xField: 'x',
  yField: 'y',
  seriesField: 'f',
  smooth: true,
  animation: {
    appear: {
      animation: 'path-in',
      duration: 5000,
    }
  }
})

export default { config }