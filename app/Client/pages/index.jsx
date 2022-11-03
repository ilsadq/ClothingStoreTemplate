import Head from 'next/head'

import styles from '../styles/index.module.sass';

export default function Home() {
  return (
    <main className={styles.page}>
      <Head>
        <title>Index page</title>
      </Head>
      <div className="container">
        <h1>Index page</h1>
      </div>
    </main>
  )
}
