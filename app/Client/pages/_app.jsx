import '../styles/globals.sass'

import MainLayout from '../layouts/main-layout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
