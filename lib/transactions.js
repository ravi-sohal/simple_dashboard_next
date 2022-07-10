import { faker } from '@faker-js/faker'
import store from '../lib/store'

const dump = (size) => {
  const sales = []
  const data = new Array(size)
    .fill()
    .map(() => ({
      date: faker.date.between(
          '2022-12-23T00:00:00.000Z',
          '2022-12-31T00:00:00.000Z'
        )
        .toLocaleDateString()
        .split('/')
        // .reverse()
        .join('-'),
      ...store.product(),
      // price: faker.mersenne.rand(10000, 250000),
      count: 1
    })
  )

  data.forEach(sale => {
    const name = sale.device + ' ' + sale.storage
    if (!sales[sale.date + name])
      sales[sale.date + name] = {
        date: sale.date,
        name: name,
        device: sale.device,
        color: sale.color,
        storage: sale.storage,
        count: 0
      }

    sales[sale.date + name].count ++
  })

  return Array.from(
    Object.values(sales)
      .map(sale => (
        {
          date: sale.date,
          name: sale.name,
          device: sale.device,
          color: sale.color,
          storage: sale.storage,
          count: sale.count
        }
      ))
  )
  .sort((a, b) => a.date.localeCompare(b.date))
}

export default {
  dump
}