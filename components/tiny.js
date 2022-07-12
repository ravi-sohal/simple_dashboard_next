
import {
  Progress,
  TinyArea,
  TinyLine
} from '@ant-design/plots'

const config = (data) => ({
  data,
  height: 20,
  autoFit: true,
  smooth: false,
  width: 'auto',
  tooltip: false,
  padding: [0, -26, -1],
  areaStyle: {
    fill: '#6692ea'
  }
})

const progress = (props) => {
  const {
    title,
    percent
  } = props

  const progress_config = {
    height: 30,
    autoFit: false,
    percent: percent,
    color: ['#5B8FF9', '#E8EDF3'],
  }

  return (
    <>
      <p className="font-normal text-gray-700 dark:text-gray-200">{title}</p>
      <div>
        <Progress {...progress_config} />
      </div>
    </>
  )
}

const area = (props) => {
  const {
    title,
    text,
    data
  } = props

  return (
    <div className="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p className="font-normal text-gray-700 dark:text-gray-200">{title}</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
      </div>
      <div>
        <TinyArea {...config(data)} />
      </div>
    </div>
  )
}

const line = (props) => {
  const {
    title,
    text,
    data
  } = props

  return (
    <div className="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p className="font-normal text-gray-700 dark:text-gray-200">{title}</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
      </div>
      <div>
        <TinyLine {...config(data)} />
      </div>
    </div>
  )
}

const text = (props) => {
  const {
    title,
    text
  } = props

  return (
    <div className="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p className="font-normal text-gray-700 dark:text-gray-200">{title}</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
      </div>
    </div>
  )
}

const tiny = {
  progress,
  area,
  line,
  text
}

export default tiny