import transactions from './lib/transactions'
import chart from './lib/chart'
import {
  Area,
  Bar,
  Line,
  Column
} from '@ant-design/plots'

export default function Index() {
  const sales = transactions.dump(100)
  const product = sales.map(s => s.product)
  console.log(product)

  const datewise_sales = chart.prep_data(sales, 'date', 'count', 'product')

  return <Line {...chart.get_config(datewise_sales)} />
}