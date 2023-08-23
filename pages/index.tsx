import Head from 'next/head.js'
import styles from '../styles/Home.module.css'

// works:
//// @ts-expect-error .js won't add chunks to head
// import dynamic from 'next/dynamic';
// const Button = dynamic(() => import('../components/Button/Button.js').then(m => m.Button) )

import dynamic from 'next/dynamic.js';
// @ts-expect-error webpack does not have double default issues
const Button = dynamic(() => import('../components/Button/Button.js').then(m => m.Button) )

export default function Home() {
    return (
    <div className={styles.container}>
        {/*// @ts-expect-error webpack does not have double default issues*/}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button />
      </main>
    </div>
  )
}
