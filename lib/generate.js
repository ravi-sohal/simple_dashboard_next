import { faker } from '@faker-js/faker'

const device = [
  'iPad Pro',
  'iPad Air',
  'iPad',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
  'iPhone 12 Pro Max',
  'iPhone 12 Pro'
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

const agents = [
  'Bentley Watson',
  'Leland Carey',
  'Julie Kelley',
  'Gustavo Barron',
  'Clara Schmitt',
  'Jackson Norman',
  'Erika Mcbride',
  'Preston Benitez'
]

const platform = [
  'Apple Store',
  'Retailer'
]

const product = () => ({
  device: device[Math.floor(Math.random() * device.length)],
  color: color[Math.floor(Math.random() * color.length)],
  storage: storage[Math.floor(Math.random() * storage.length)]
})

const sales = (size) => {
  const data = new Array(size)
    .fill()
    .map(() => ({
      date: new Date( faker.date.between(
          '2022-12-23T00:00:00.000Z',
          '2022-12-31T00:00:00.000Z'
      )),
      ...product(),
      agent: agents[Math.floor(Math.random() * agents.length)],
      platform: platform[Math.floor(Math.random() * platform.length)],
      price: faker.mersenne.rand(1000, 2500),
      count: 1
    })
  )

  return Array.from(Object.values(data)
    .sort((a, b) => a.date - b.date)
    .map(sale => (
      {
        date: sale.date.toLocaleDateString(),
        device: sale.device,
        color: sale.color,
        storage: sale.storage,
        agent: sale.agent,
        platform: sale.platform,
        price: sale.price,
        count: sale.count
      }
    ))
  )
}

export default { sales }