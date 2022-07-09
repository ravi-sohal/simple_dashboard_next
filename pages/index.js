import { faker } from '@faker-js/faker'
import {
  Area,
  Bar,
  Line,
  Column
} from '@ant-design/plots'

const get_sales = () => {
  const sales = []
  const data = new Array(500)
    .fill()
    .map(() => ({
      date: faker.date.between(
          '2022-10-01T00:00:00.000Z',
          '2022-12-31T00:00:00.000Z'
        ).toLocaleDateString(),
      model: faker.vehicle.model(),
      color: faker.vehicle.color(),
      price: faker.mersenne.rand(10000, 250000),
      count: 1
    })
  )

  data.forEach(sale => {
    if (!sales[sale.date + sale.model])
      sales[sale.date + sale.model] = {
        date: sale.date,
        model: sale.model,
        count: 1
      }

    sales[sale.date + sale.model].count += 1
  })

  return Array.from(Object.values(data).map(raw => {
    return {
      date: raw.date,
      model: raw.model,
      count: raw.count
    }
  }))
}

const get_config = (s, xf, yf, sf) => {
  return {
    data: s,
    xField: xf,
    yField: yf,
    seriesField: sf,
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      }
    }
  }
}

export default function Index() {
  const sales = get_sales()

  const chart_one = [sales, 'date', 'count', 'model']

  return <Area {...get_config(...chart_one)} />
}