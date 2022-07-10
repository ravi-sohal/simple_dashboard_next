import generate from '../lib/generate'
import chart from '../lib/chart'
import {
  Area,
  Bar,
  Line,
  Column
} from '@ant-design/plots'

export default function Index() {
  // Generate sales
  const sales = generate.transactions(1000)

  const products = [... new Set(sales.map(s => s.device))]
  const top_products = sales.sort((a, b) => b.count - a.count).slice(0, 4)

  return (
    <>
      <h1 className="text-3xl font-bold">
        Retail Sales Analytics
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1">
        <Bar {...chart.config(sales, 'count', 'date', 'name')} />
      </div>
    </>
  )
}