import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <meta name='description' content='Portfolio of omkar shinde' />
          <meta name='keywords' content='omkar shinde , omkar , omkar shinde portfolio , omkar portfolio , omkarshinde , omkarshinde.com' />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;