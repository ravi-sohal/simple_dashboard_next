const devices = [
  'iPad Pro',
  'iPad Air',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
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

const product = () => ({
  device: devices[Math.floor(Math.random() * devices.length)],
  color: color[Math.floor(Math.random() * color.length)],
  storage: storage[Math.floor(Math.random() * storage.length)]
})

export default {
  product
}