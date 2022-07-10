const get_config = (data) => (
  {
    data: data,
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
  }
)

const prep_data = (data, x, y, f) => (
  data.map(data => (
    {
      x: data[x],
      y: data[y],
      f: data[f]
    }
  ))
)

export default {
  get_config,
  prep_data
}