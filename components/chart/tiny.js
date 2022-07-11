
import {
  TinyArea,
  TinyLine
} from '@ant-design/plots'

const config = (data) => ({
  data,
  height: 20,
  autoFit: true,
  smooth: false,
  width: 'auto',
  padding: [0, -26, -1],
  areaStyle: {
    fill: '#6692ea'
  }
})

const area = (props) => {
  return (
    <div class="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p class="font-normal text-gray-700 dark:text-gray-200">{props.title}</p>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.text}
        </h5>
      </div>
      <div>
        <TinyArea {...config(props.data)} />
      </div>
    </div>
  )
}

const line = (props) => {
  return (
    <div class="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p class="font-normal text-gray-700 dark:text-gray-200">{props.title}</p>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.text}
        </h5>
      </div>
      <div>
        <TinyLine {...config(props.data)} />
      </div>
    </div>
  )
}

const text = (props) => {
  return (
    <div class="w-full block bg-white rounded-md dark:bg-gray-800 ">
      <div className='p-6'>
        <p class="font-normal text-gray-700 dark:text-gray-200">{props.title}</p>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.text}
        </h5>
      </div>
    </div>
  )
}

export default {
  area,
  line,
  text
}