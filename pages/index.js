// import sales from '../sales.json'
import Image from 'next/image'
import generate from '../lib/generate'
import count from '../lib/count'
import table from '../components/table'
import tiny from '../components/chart/tiny'

export default function Index() {
  const sales = generate.sales(1000)
  const sales_by_day = count.by('date', sales)
  const sales_by_devices = count.by('device', sales)

  const best_seller = sales_by_devices.sort((a, b) => a.count - b.count)[0].name
  return (
    <div className='p-6 px-10'>
      <div className='mb-6'>
        <Image
          src='https://www.clipartmax.com/png/full/184-1849415_apple-logo-white-512x512-icon-apple-icon-png-white.png'
          className='max-w-9 h-11'
          width='40px'
          height='45px'
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <tiny.line
            data={sales_by_day.map(s => s.count)}
            title={'Sales'}
            text={
              'Daily Sales Average $' + Math.ceil(
                sales_by_day
                  .map(s => s.count)
                  .reduce((t, a) => t + a) / sales_by_day.length
              )
            }
          />
        </div>
        <div>
          {/* <Tiny.Line
            data={
              daily_count(
                sales,
                dates,
                top_product
              )
            }
            title={'Top Seller'}
            text={top_product}
          /> */}
        </div>
        <div>
          <table.main
            title='Top Sellers'
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
        <div>

        </div>
      </div>
    </div>
  )
}