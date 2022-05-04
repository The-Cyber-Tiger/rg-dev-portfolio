import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
                <meta name="description" content="Rodrigo Gibran Developer portfolio" />
                <link rel="icon" href="/favicon-196x196.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400&family=Poppins:wght@400;700&family=Rock+Salt&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}