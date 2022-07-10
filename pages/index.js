import transactions from '../lib/transactions'
import chart from '../lib/chart'
import { DarkThemeToggle } from 'flowbite-react'
import {
  Area,
  Bar,
  Line,
  Column
} from '@ant-design/plots'

export default function Index() {
  const sales = transactions.dump(1000)
  const products = [... new Set(sales.map(s => s.device))]

  const datewise_sales = chart.prep_data(sales, 'count', 'date', 'name')

  return (
    <>
      <h1 className="text-3xl font-bold">
        Retail Sales Analytics
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1">
        <Bar {...chart.get_config(datewise_sales)} />
      </div>
    </>
  )
}