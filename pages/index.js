// import sales from '../sales.json'
import Image from 'next/image'
import generate from '../lib/generate'
import count from '../lib/count'
import group from '../lib/group'
import table from '../components/table'
import tiny from '../components/tiny'

const logo = 'https://www.clipartmax.com/png/full/184-1849415_apple-logo-white-512x512-icon-apple-icon-png-white.png'

export default function Index() {
  
  const sales = generate.sales(1500)

  const sales_by_day = count.by('date', sales)

  const total_sales = sales.reduce((t, s) => t + s.price, 0)

  const group_by_sales = group.by(['date'], sales)

  const total_daily_sales = []
  for (const [key, sale] of Object.entries(group_by_sales)) {
    total_daily_sales.push(sale.reduce((t, s) => t + s.price, 0))
  }

  const sales_by_devices = count.by('device', sales)

  const group_by_devices = group.by(['device'], sales)

  const top_device = sales_by_devices
    .sort((a, b) => a.count - b.count)[0].element

  const top_device_daily_sales = count.by(
      'date', 
      group_by_devices[top_device]
    )

  const sales_by_agents = count.by('agent', sales)

  const group_by_agents = group.by(['agent'], sales)

  const top_agent = sales_by_agents
    .sort((a, b) => a.count - b.count)[0].element

  const top_agent_daily_sales = count.by(
      'date', 
      group_by_agents[top_agent]
    )
  
  return (
    <div class="container m-auto p-4">
      <div className='mb-6'>
        <Image
          src={logo}
          width='40px'
          height='45px'
        />
      </div>
      <div className='mb-4'>
        <tiny.progress
          title='Sales Target'
          percent={0.55}
        />
      </div>
      <div class="flex flex-row space-x-4">
        <div class="flex w-full flex-col space-y-4">
          <div>
            <tiny.text
              title={'Total Sales'}
              text={
                '$' + total_sales
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            />
          </div>
          <div>
            <tiny.line
              data={total_daily_sales}
              title={'Average Daily Sales'}
              text={
                '$' + Math.ceil(
                  total_daily_sales
                    .reduce((t, a) => t + a) / total_daily_sales.length
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' (' + Math.ceil(
                  sales_by_day
                    .map(s => s.count)
                    .reduce((t, a) => t + a) / sales_by_day.length
                ) + ')'
              }
            />
          </div>
        </div>
        <div class="flex w-full flex-col space-y-4">
          <div>
            <tiny.line
              data={top_device_daily_sales.map(s => s.count)}
              title={'Top Device'}
              text={top_device}
            />
          </div>
          <div>
            <table.main
              title='Top Devices'
              headers={[
                'Device',
                'Sales'
              ]}
              columns={[
                'element',
                'count'
              ]}
              data={
                sales_by_devices
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 5)
              }
            />
          </div>
        </div>
        <div class="flex w-full flex-col space-y-4">
          <div>
            <tiny.line
              data={top_agent_daily_sales.map(s => s.count)}
              title={'Top Agent'}
              text={top_agent}
            />
          </div>
          <div>
            <table.main
              title='Top Agents'
              headers={[
                'Device',
                'Sales'
              ]}
              columns={[
                'element',
                'count'
              ]}
              data={
                sales_by_agents
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 5)
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}