import { faker } from '@faker-js/faker'

const dump = (count) => {
  const sales = []
  const data = new Array(count)
    .fill()
    .map(() => ({
      date: faker.date.between(
          '2022-12-23T00:00:00.000Z',
          '2022-12-31T00:00:00.000Z'
        )
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('-'),
      product: faker.commerce.product(),
      color: faker.color.human(),
      price: faker.mersenne.rand(10000, 250000),
      count: 1
    })
  )

  data.forEach(sale => {
    if (!sales[sale.date + sale.product])
      sales[sale.date + sale.product] = {
        date: sale.date,
        product: sale.product,
        color: sale.color,
        count: 0
      }

    sales[sale.date + sale.product].count += 12
  })

  return Array.from(
    Object.values(sales)
      .map(data => (
        {
          date: data.date,
          product: data.product,
          color: data.color,
          count: data.count
        }
      ))
  )
  .sort((a, b) => a.date.localeCompare(b.date))
}

export default {
  dump
}