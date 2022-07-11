import '../styles/globals.css'
import {
  Flowbite
} from 'flowbite-react'

function App({ Component, pageProps }) {
  return (
    <Flowbite
      theme={{
        theme: {
          alert: {
            color: {
              primary: 'bg-primary'
            }
          }
        }
      }}
    >
      <Component {...pageProps} />
    </Flowbite>
  )
}

export default App
