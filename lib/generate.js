import { faker } from '@faker-js/faker'

const device = [
  'iPad Pro',
  'iPad Air',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
]

const color = [
  'Space Grey',
  'Silver',
  'Rose Gold',
  'Midnight'
]

const storage = [
  '256 GB',
  '512 GB'
]

const product = () => ({
  device: device[Math.floor(Math.random() * device.length)],
  color: color[Math.floor(Math.random() * color.length)],
  storage: storage[Math.floor(Math.random() * storage.length)]
})

const transactions = (size) => {
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
        .join('-'),
      ...product(),
      price: faker.mersenne.rand(1000, 2500),
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
        price: sale.price,
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
          price: sale.price,
          count: sale.count
        }
      ))
  )
  .sort((a, b) => a.date.localeCompare(b.date))
}

export default {
  product,
  transactions
}